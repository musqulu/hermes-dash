import { useEffect, useMemo, useState, type FormEvent, type ReactNode } from "react";
import { BarChart3, FileText, List, MessageSquare, Search, Table2 } from "lucide-react";
import type { Report, ReportComment, ReportIndex, ReportItem } from "@/lib/reports";

type Props = {
  index: ReportIndex;
  managementMode?: boolean;
  initialView?: ViewMode;
};

type ViewFilter = "all" | "weekly";
type ViewMode = "items" | "reports" | "prices";

const dateFormatter = new Intl.DateTimeFormat("en-GB", {
  day: "2-digit",
  month: "short",
  year: "numeric",
});

function formatDate(value: string) {
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? value : dateFormatter.format(date);
}

function metricLabel(value: number, singular: string, plural = `${singular}s`) {
  return `${value.toLocaleString("en-GB")} ${value === 1 ? singular : plural}`;
}

/* ---- Inline markdown (bold, code, links) ----------------------------- */

const inlinePattern = /(\[[^\]]+\]\((?:https?:\/\/|\/)[^)]+\))|(\*\*[^*]+\*\*)|(`[^`]+`)|(\*[^*]+\*)/g;

function renderInlineMarkdown(value: string, keyPrefix: string): ReactNode[] {
  const nodes: ReactNode[] = [];
  let lastIndex = 0;
  let i = 0;

  for (const match of value.matchAll(inlinePattern)) {
    const start = match.index ?? 0;
    if (start > lastIndex) {
      nodes.push(value.slice(lastIndex, start));
    }

    const token = match[0];
    const key = `${keyPrefix}-${i++}`;

    if (match[1]) {
      const link = token.match(/\[([^\]]+)\]\(([^)]+)\)/);
      if (link) {
        const external = link[2].startsWith("http");
        nodes.push(
          <a
            key={key}
            href={link[2]}
            target={external ? "_blank" : undefined}
            rel={external ? "noreferrer" : undefined}
          >
            {link[1]}
          </a>,
        );
      }
    } else if (match[2]) {
      nodes.push(<strong key={key}>{token.slice(2, -2)}</strong>);
    } else if (match[3]) {
      nodes.push(<code key={key}>{token.slice(1, -1)}</code>);
    } else if (match[4]) {
      nodes.push(<em key={key}>{token.slice(1, -1)}</em>);
    }

    lastIndex = start + token.length;
  }

  if (lastIndex < value.length) {
    nodes.push(value.slice(lastIndex));
  }

  return nodes;
}

/* ---- Block-aware markdown renderer ----------------------------------- */

type PricePoint = {
  bucket: string;
  label?: string;
  min: number | null;
  median?: number | null;
  max?: number | null;
  count?: number;
};

function parsePriceHistory(value: string): PricePoint[] | null {
  try {
    const parsed = JSON.parse(value) as unknown;
    if (!Array.isArray(parsed)) return null;

    const rows = parsed.flatMap((item) => {
      if (!item || typeof item !== "object") return [];
      const row = item as Record<string, unknown>;
      const bucket = typeof row.bucket === "string" ? row.bucket : typeof row.label === "string" ? row.label : "";
      const min = typeof row.min === "number" ? row.min : null;
      if (!bucket || min === null) return [];
      return [{
        bucket,
        label: typeof row.label === "string" ? row.label : undefined,
        min,
        median: typeof row.median === "number" ? row.median : null,
        max: typeof row.max === "number" ? row.max : null,
        count: typeof row.count === "number" ? row.count : undefined,
      } satisfies PricePoint];
    });

    return rows.length ? rows : null;
  } catch {
    return null;
  }
}

function formatPrice(value: number | null | undefined) {
  if (typeof value !== "number") return "—";
  return `${Math.round(value).toLocaleString("pl-PL")} PLN`;
}

function PriceHistoryChart({ points }: { points: PricePoint[] }) {
  const maxValue = Math.max(...points.map((point) => point.max ?? point.median ?? point.min ?? 0), 1);

  return (
    <div className="price-chart" aria-label="Price history chart">
      {points.map((point) => {
        const value = point.median ?? point.min ?? 0;
        const width = Math.max(4, Math.round((value / maxValue) * 100));
        return (
          <div className="price-chart-row" key={point.bucket}>
            <div className="price-chart-label">
              <strong>{point.label ?? point.bucket}</strong>
              <span>{point.count ? `${point.count} observed` : "baseline"}</span>
            </div>
            <div className="price-chart-track" aria-hidden>
              <span style={{ width: `${width}%` }} />
            </div>
            <div className="price-chart-values">
              <span>min {formatPrice(point.min)}</span>
              <span>median {formatPrice(point.median)}</span>
              <span>max {formatPrice(point.max)}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

function renderMarkdown(content: string): ReactNode[] {
  const lines = content.split("\n");
  const blocks: ReactNode[] = [];
  let key = 0;

  let listType: "ul" | "ol" | null = null;
  let listItems: ReactNode[] = [];

  const flushList = () => {
    if (!listType || listItems.length === 0) return;
    const items = listItems;
    if (listType === "ul") {
      blocks.push(<ul key={`b-${key++}`}>{items}</ul>);
    } else {
      blocks.push(<ol key={`b-${key++}`}>{items}</ol>);
    }
    listType = null;
    listItems = [];
  };

  for (let idx = 0; idx < lines.length; idx++) {
    const raw = lines[idx];
    const line = raw.trim();

    if (line.startsWith("```")) {
      flushList();
      const fenceLang = line.slice(3).trim();
      const codeLines: string[] = [];
      idx++;
      while (idx < lines.length && !lines[idx].trim().startsWith("```")) {
        codeLines.push(lines[idx]);
        idx++;
      }
      if (fenceLang === "price-history-json") {
        const points = parsePriceHistory(codeLines.join("\n"));
        if (points) {
          blocks.push(<PriceHistoryChart key={`b-${key++}`} points={points} />);
          continue;
        }
      }
      blocks.push(
        <pre key={`b-${key++}`}>
          <code>{codeLines.join("\n")}</code>
        </pre>,
      );
      continue;
    }

    if (!line || line === "---") {
      flushList();
      continue;
    }

    const nextLine = lines[idx + 1]?.trim() ?? "";
    if (line.startsWith("|") && nextLine.match(/^\|?\s*:?-{3,}:?\s*(\|\s*:?-{3,}:?\s*)+\|?$/)) {
      flushList();
      const headers = line.split("|").map((cell) => cell.trim()).filter(Boolean);
      const rows: string[][] = [];
      idx += 2;
      while (idx < lines.length && lines[idx].trim().startsWith("|")) {
        rows.push(lines[idx].split("|").map((cell) => cell.trim()).filter(Boolean));
        idx++;
      }
      idx--;
      blocks.push(
        <div className="table-wrap" key={`b-${key++}`}>
          <table>
            <thead>
              <tr>{headers.map((header, cellIndex) => <th key={`th-${cellIndex}`}>{renderInlineMarkdown(header, `th-${idx}-${cellIndex}`)}</th>)}</tr>
            </thead>
            <tbody>
              {rows.map((row, rowIndex) => (
                <tr key={`tr-${rowIndex}`}>
                  {row.map((cell, cellIndex) => <td key={`td-${rowIndex}-${cellIndex}`}>{renderInlineMarkdown(cell, `td-${idx}-${rowIndex}-${cellIndex}`)}</td>)}
                </tr>
              ))}
            </tbody>
          </table>
        </div>,
      );
      continue;
    }

    const heading = line.match(/^(#{1,6})\s+(.+)$/);
    if (heading) {
      flushList();
      const level = heading[1].length;
      const text = renderInlineMarkdown(heading[2], `h-${idx}`);
      if (level <= 1) blocks.push(<h2 key={`b-${key++}`}>{text}</h2>);
      else if (level === 2) blocks.push(<h3 key={`b-${key++}`}>{text}</h3>);
      else blocks.push(<h4 key={`b-${key++}`}>{text}</h4>);
      continue;
    }

    const ordered = line.match(/^\d+\.\s+(.+)$/);
    if (ordered) {
      if (listType !== "ol") flushList();
      listType = "ol";
      listItems.push(<li key={`li-${idx}`}>{renderInlineMarkdown(ordered[1], `ol-${idx}`)}</li>);
      continue;
    }

    const unordered = raw.match(/^(\s*)[-*]\s+(.+)$/);
    if (unordered) {
      if (listType !== "ul") flushList();
      listType = "ul";
      const indented = unordered[1].length >= 2;
      listItems.push(
        <li key={`li-${idx}`} style={indented ? { marginLeft: "1.1rem", opacity: 0.92 } : undefined}>
          {renderInlineMarkdown(unordered[2], `ul-${idx}`)}
        </li>,
      );
      continue;
    }

    flushList();
    blocks.push(<p key={`b-${key++}`}>{renderInlineMarkdown(line, `p-${idx}`)}</p>);
  }

  flushList();
  return blocks;
}

/* ---- Dashboard ------------------------------------------------------- */

function priceLabel(value: number | null | undefined) {
  if (typeof value !== "number") return "—";
  return `${Math.round(value).toLocaleString("pl-PL")} PLN`;
}

function statusClass(status: string) {
  const lower = status.toLowerCase();
  if (lower.includes("buy") || lower.includes("best")) return "buy";
  if (lower.includes("ask")) return "ask";
  if (lower.includes("ignore")) return "ignore";
  return "watch";
}

function ItemStatusBadge({ item }: { item: ReportItem }) {
  return (
    <span className="status-stack">
      <span className="status-badge" data-kind={statusClass(item.status)}>{item.status}</span>
      <span className="activity-badge" data-active={item.isActive}>{item.isActive ? "Active" : "Inactive"}</span>
    </span>
  );
}

function PriceTrendGraph({ items, columnWidth }: { items: ReportItem[]; columnWidth: number }) {
  const chartItems = items
    .filter((item) => item.priceHistory.some((point) => typeof point.pricePln === "number"))
    .slice(0, 24);
  const dates = Array.from(new Set(chartItems.flatMap((item) => item.priceHistory.map((point) => point.date)))).sort();
  const prices = chartItems.flatMap((item) => item.priceHistory.map((point) => point.pricePln).filter((price): price is number => typeof price === "number"));
  const minPrice = Math.min(...prices, 0);
  const maxPrice = Math.max(...prices, 1);
  const width = Math.max(720, dates.length * columnWidth + 260);
  const height = Math.max(360, chartItems.length * 34 + 120);
  const left = 220;
  const top = 38;
  const rowGap = chartItems.length ? (height - top - 76) / Math.max(chartItems.length - 1, 1) : 0;
  const xForDate = (date: string) => left + dates.indexOf(date) * columnWidth;
  const yForPrice = (price: number) => {
    const span = Math.max(maxPrice - minPrice, 1);
    return top + (1 - (price - minPrice) / span) * 220;
  };

  if (!chartItems.length) {
    return <p className="empty-copy">No price observations extracted yet for this project.</p>;
  }

  return (
    <div className="price-page-scroll">
      <svg className="price-timeline" width={width} height={height} role="img" aria-label="Price over date graph">
        <g className="chart-grid">
          {dates.map((date) => (
            <line key={date} x1={xForDate(date)} x2={xForDate(date)} y1={top - 8} y2={height - 48} />
          ))}
          {[minPrice, (minPrice + maxPrice) / 2, maxPrice].map((price) => (
            <g key={price}>
              <line x1={left - 8} x2={width - 24} y1={yForPrice(price)} y2={yForPrice(price)} />
              <text x={8} y={yForPrice(price) + 4}>{priceLabel(price)}</text>
            </g>
          ))}
        </g>
        <g className="chart-dates">
          {dates.map((date) => <text key={date} x={xForDate(date)} y={height - 18} transform={`rotate(-35 ${xForDate(date)} ${height - 18})`}>{date.slice(5)}</text>)}
        </g>
        {chartItems.map((item, rowIndex) => {
          const points = item.priceHistory.filter((point) => typeof point.pricePln === "number");
          const path = points.map((point, index) => `${index === 0 ? "M" : "L"} ${xForDate(point.date)} ${yForPrice(point.pricePln as number)}`).join(" ");
          const labelY = top + 250 + rowIndex * rowGap;
          return (
            <g key={item.id} className="chart-item" data-active={item.isActive}>
              <text x={8} y={labelY + 4}>{item.title.slice(0, 44)}</text>
              <path d={path} />
              {points.map((point) => (
                <circle key={`${item.id}-${point.date}-${point.pricePln}`} cx={xForDate(point.date)} cy={yForPrice(point.pricePln as number)} r={item.isActive ? 4 : 3}>
                  <title>{`${item.title}: ${priceLabel(point.pricePln)} on ${point.date}`}</title>
                </circle>
              ))}
            </g>
          );
        })}
      </svg>
    </div>
  );
}

/* ---- Dashboard ------------------------------------------------------- */

export function ReportDashboard({ index, managementMode = false, initialView = "items" }: Props) {
  const [query, setQuery] = useState("");
  const [viewFilter, setViewFilter] = useState<ViewFilter>("all");
  const [viewMode, setViewMode] = useState<ViewMode>(initialView);
  const [columnWidth, setColumnWidth] = useState(74);
  const [activeProjectId, setActiveProjectId] = useState(index.projects[0]?.id ?? "");
  const activeProject = index.projects.find((project) => project.id === activeProjectId) ?? index.projects[0];
  const [activeIdByProject, setActiveIdByProject] = useState<Record<string, string>>(() =>
    Object.fromEntries(index.projects.map((project) => [project.id, project.reports[0]?.id ?? ""])),
  );

  const reports = useMemo(() => {
    if (!activeProject) return [];
    const scopedReports = viewFilter === "weekly"
      ? activeProject.reports.filter((report) => report.cadence === "weekly")
      : activeProject.reports;
    const needle = query.trim().toLowerCase();
    if (!needle || viewMode !== "reports") return scopedReports;

    return scopedReports.filter((report) =>
      [report.title, report.summary, report.fileName, report.sourcePath, report.content]
        .some((value) => value.toLowerCase().includes(needle)),
    );
  }, [activeProject, query, viewFilter, viewMode]);

  const items = useMemo(() => {
    if (!activeProject) return [];
    const needle = query.trim().toLowerCase();
    const scopedItems = activeProject.items;
    if (!needle || viewMode === "reports") return scopedItems;
    return scopedItems.filter((item) =>
      [item.title, item.summary, item.status, item.source, item.location, item.specs, item.url]
        .filter(Boolean)
        .some((value) => String(value).toLowerCase().includes(needle)),
    );
  }, [activeProject, query, viewMode]);

  const weeklyReportCount = activeProject?.reports.filter((report) => report.cadence === "weekly").length ?? 0;
  const activeId = activeProject ? activeIdByProject[activeProject.id] : "";
  const active = reports.find((report) => report.id === activeId) ?? activeProject?.reports.find((report) => report.id === activeId) ?? reports[0];
  const activeItems = activeProject?.items.filter((item) => item.isActive).length ?? 0;
  const totalReports = index.projects.reduce((sum, project) => sum + project.reports.length, 0);
  const totalItems = index.projects.reduce((sum, project) => sum + project.items.length, 0);

  function selectReport(reportId: string) {
    if (!activeProject) return;
    setActiveIdByProject((current) => ({ ...current, [activeProject.id]: reportId }));
  }

  return (
    <main className="app-shell">
      <header className="app-header">
        <a className="wordmark" href="/" aria-label="Hermes Dash home">
          Hermes <span className="accent">Dash</span>
        </a>
        <div className="header-meta">
          <span className="header-note">Deduped results · {metricLabel(totalItems, "item")} · {metricLabel(totalReports, "report")}</span>
          <a className="btn" href="/prices">Prices</a>
          <a className="btn" href={managementMode ? "/" : "/manage"}>
            {managementMode ? "Public view" : "Manage"}
          </a>
        </div>
      </header>

      <section className="project-hero" aria-label="Report collection">
        <div>
          <p className="eyebrow">Current feed</p>
          <h1>{activeProject?.name ?? "Reports"}</h1>
          <p>Results are deduplicated by listing/source link, shown as rows, and labelled active when still present in the newest report.</p>
        </div>
        <div className="hero-facts" aria-label="Collection facts">
          <span>{metricLabel(activeProject?.items.length ?? 0, "unique item")}</span>
          <span>{metricLabel(activeItems, "active item")}</span>
          <span title={activeProject?.sourceDir}>{activeProject?.sourceDir ?? "No source folder"}</span>
        </div>
      </section>

      <nav className="project-tabs" aria-label="Projects">
        {index.projects.map((project) => (
          <button
            key={project.id}
            type="button"
            className="project-tab"
            data-active={activeProject?.id === project.id}
            onClick={() => {
              setActiveProjectId(project.id);
              setQuery("");
              setViewFilter("all");
            }}
          >
            <span>{project.name}</span>
            <span>{project.items.length || project.reports.length}</span>
          </button>
        ))}
      </nav>

      <div className="view-toolbar">
        <div className="search-field">
          <Search className="h-4 w-4" aria-hidden />
          <input
            type="search"
            placeholder="Search results, prices, places, reports…"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            aria-label="Search results"
          />
        </div>
        <div className="filter-pills" aria-label="View mode">
          <button type="button" data-active={viewMode === "items"} onClick={() => setViewMode("items")}><Table2 className="h-3.5 w-3.5" /> Table</button>
          <button type="button" data-active={viewMode === "reports"} onClick={() => setViewMode("reports")}><List className="h-3.5 w-3.5" /> Reports</button>
          <button type="button" data-active={viewMode === "prices"} onClick={() => setViewMode("prices")}><BarChart3 className="h-3.5 w-3.5" /> Prices</button>
        </div>
        {viewMode === "reports" && weeklyReportCount ? (
          <div className="filter-pills" aria-label="Report filters">
            <button type="button" data-active={viewFilter === "all"} onClick={() => setViewFilter("all")}>All</button>
            <button type="button" data-active={viewFilter === "weekly"} onClick={() => setViewFilter("weekly")}>Weekly</button>
          </div>
        ) : null}
        {viewMode === "prices" ? (
          <label className="width-control">
            <span>Column width</span>
            <input type="range" min="44" max="140" value={columnWidth} onChange={(event) => setColumnWidth(Number(event.target.value))} />
            <b>{columnWidth}px</b>
          </label>
        ) : null}
      </div>

      {viewMode === "items" ? (
        <section className="spreadsheet-panel">
          <div className="list-count">
            <span>{items.length} unique visible · duplicates hidden</span>
            {query ? <button type="button" onClick={() => setQuery("")}>Clear search</button> : null}
          </div>
          {items.length ? (
            <div className="results-table-wrap">
              <table className="results-table">
                <thead>
                  <tr>
                    <th>Status</th>
                    <th>Item</th>
                    <th>Price</th>
                    <th>Last seen</th>
                    <th>First seen</th>
                    <th>Seen</th>
                    <th>Specs</th>
                    <th>Source / place</th>
                    <th>Link</th>
                  </tr>
                </thead>
                <tbody>
                  {items.map((item) => (
                    <tr key={item.id} data-active={item.isActive} onClick={() => selectReport(item.reportId)}>
                      <td><ItemStatusBadge item={item} /></td>
                      <td>
                        <div className="cell-title">
                          {item.url ? (
                            <a className="item-title-link" href={item.url} target="_blank" rel="noreferrer" onClick={(event) => event.stopPropagation()}>
                              {item.title}
                            </a>
                          ) : item.title}
                          <span>{item.summary}</span>
                        </div>
                      </td>
                      <td className="numeric">{priceLabel(item.pricePln)}</td>
                      <td>{formatDate(item.lastSeen)}</td>
                      <td>{formatDate(item.firstSeen)}</td>
                      <td className="numeric">{item.seenCount}</td>
                      <td>{item.specs ?? "—"}</td>
                      <td>{[item.source, item.location].filter(Boolean).join(" · ") || "—"}</td>
                      <td>
                        {item.url ? (
                          <a className="open-item-link" href={item.url} target="_blank" rel="noreferrer" onClick={(event) => event.stopPropagation()} aria-label={`Open source listing for ${item.title}`}>
                            Open ↗
                          </a>
                        ) : (
                          <span className="missing-link">No link</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <p className="empty-copy">No extracted result rows yet. Use Reports for the raw Markdown.</p>
          )}
        </section>
      ) : viewMode === "prices" ? (
        <section className="spreadsheet-panel">
          <div className="list-count">
            <span>{items.length} deduped items · price by date</span>
            <span>Inactive rows disappear when a listing stops showing up in the newest cron report.</span>
          </div>
          <PriceTrendGraph items={items} columnWidth={columnWidth} />
        </section>
      ) : (
        <div className="app-body">
          <aside className="report-list-panel">
            <div className="list-count">
              <span>{reports.length} visible reports</span>
              {query ? <button type="button" onClick={() => setQuery("")}>Clear search</button> : null}
            </div>

            {reports.length ? (
              <div className="entry-list" key={`${activeProject?.id}-${viewFilter}-${query}`}>
                {reports.map((report) => (
                  <button
                    key={`${report.projectId}-${report.id}`}
                    type="button"
                    className="entry-row"
                    data-active={active?.id === report.id}
                    onClick={() => selectReport(report.id)}
                  >
                    <span className="entry-date">{formatDate(report.reportDate)}</span>
                    <span className="entry-title">{report.title}</span>
                    <span className="entry-summary">{report.summary}</span>
                    <span className="entry-meta">{metricLabel(report.items.length, "item")} extracted</span>
                  </button>
                ))}
              </div>
            ) : (
              <p className="empty-copy">No reports match this search.</p>
            )}
          </aside>

          <ReportDetail report={active} managementMode={managementMode} hasProjects={!!activeProject} />
        </div>
      )}
    </main>
  );
}

function ReportDetail({
  report,
  managementMode,
  hasProjects,
}: {
  report?: Report;
  managementMode: boolean;
  hasProjects: boolean;
}) {
  const [comments, setComments] = useState<ReportComment[]>(report?.comments ?? []);
  const [comment, setComment] = useState("");
  const [status, setStatus] = useState<"idle" | "saving" | "saved" | "error">("idle");
  const [error, setError] = useState("");

  useEffect(() => {
    setComments(report?.comments ?? []);
    setComment("");
    setStatus("idle");
    setError("");
  }, [report?.projectId, report?.id, report?.comments]);

  if (!report) {
    return (
      <section className="detail-pane">
        <div className="empty-state animate-fade">
          <FileText className="h-6 w-6" aria-hidden />
          <h3>{hasProjects ? "No report selected" : "No reports yet"}</h3>
          <p>
            {hasProjects
              ? "Pick an entry from the list to read it here."
              : "Drop Markdown reports into a project folder, then refresh."}
          </p>
        </div>
      </section>
    );
  }

  async function submitComment(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!report) return;

    const trimmed = comment.trim();
    if (!trimmed) return;

    setStatus("saving");
    setError("");

    const response = await fetch("/api/report-comments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ projectId: report.projectId, reportId: report.id, comment: trimmed }),
    });
    const payload = (await response.json()) as { comment?: ReportComment; error?: string };

    if (!response.ok || !payload.comment) {
      setStatus("error");
      setError(payload.error ?? "Could not save comment.");
      return;
    }

    setComments((current) => [...current, payload.comment as ReportComment]);
    setComment("");
    setStatus("saved");
  }

  return (
    <section className="detail-pane animate-in" key={`${report.projectId}-${report.id}`}>
      <div className="detail-head">
        <div className="detail-kicker">
          <span className="file-badge">
            <FileText className="h-3.5 w-3.5" aria-hidden />
            {report.fileName}
          </span>
          <span>{formatDate(report.reportDate)}</span>
        </div>
        <h1 className="detail-title">{report.title}</h1>
        <p className="detail-summary">{report.summary}</p>
        <div className="meta-line">
          <span className="source-path" title={report.sourcePath}>{report.sourcePath}</span>
        </div>
      </div>

      <div className="detail-body">
        {managementMode ? (
          <section className="feedback-block">
            <div className="flex items-center gap-2" style={{ color: "var(--modal-cream)", fontWeight: 500 }}>
              <MessageSquare className="h-4 w-4" aria-hidden /> Feedback → agent improvement draft
            </div>
            <p className="entry-summary" style={{ whiteSpace: "normal" }}>
              Add feedback after this report. The app saves your comment and creates a draft improvement note for
              future agent runs.
            </p>
            <form className="flex flex-col gap-3" onSubmit={submitComment}>
              <textarea
                className="field"
                placeholder="What should future agent reports do better?"
                value={comment}
                onChange={(event) => setComment(event.target.value)}
              />
              <div className="flex items-center gap-3">
                <button className="btn-accent btn" disabled={status === "saving" || !comment.trim()} type="submit">
                  {status === "saving" ? "Saving…" : "Save feedback"}
                </button>
                {status === "saved" ? (
                  <span className="entry-summary">Saved as a draft improvement note.</span>
                ) : null}
                {status === "error" ? (
                  <span style={{ color: "hsl(var(--destructive))", fontSize: "0.8rem" }}>{error}</span>
                ) : null}
              </div>
            </form>

            {comments.length ? (
              <div className="flex flex-col gap-3">
                {comments.map((item) => (
                  <div key={item.id} className="comment-card">
                    <div className="entry-date" style={{ textTransform: "none", letterSpacing: 0 }}>
                      {formatDate(item.createdAt)} · saved to {item.sourcePath}
                    </div>
                    <p style={{ marginTop: "0.4rem", color: "var(--modal-cream)" }}>{item.authorComment}</p>
                    <pre>{item.improvementDraft}</pre>
                  </div>
                ))}
              </div>
            ) : null}
          </section>
        ) : null}

        <section className="open-card">
          <div>
            <div className="section-label">Open this</div>
            <p>{report.summary}</p>
          </div>
          {report.primaryLink ? (
            <a className="btn btn-accent" href={report.primaryLink} target="_blank" rel="noreferrer">
              Open link
            </a>
          ) : null}
        </section>

        <section>
          <div className="section-label">Context</div>
          <div className="report-prose">{renderMarkdown(report.content)}</div>
        </section>
      </div>
    </section>
  );
}
