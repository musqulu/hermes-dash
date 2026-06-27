"use client";

import { useEffect, useMemo, useState, type FormEvent, type ReactNode } from "react";
import { FileText, MessageSquare, Search } from "lucide-react";
import type { Report, ReportComment, ReportIndex } from "@/lib/reports";

type Props = {
  index: ReportIndex;
  managementMode?: boolean;
};

type ViewFilter = "all" | "weekly";

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
      const codeLines: string[] = [];
      idx++;
      while (idx < lines.length && !lines[idx].trim().startsWith("```")) {
        codeLines.push(lines[idx]);
        idx++;
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

export function ReportDashboard({ index, managementMode = false }: Props) {
  const [query, setQuery] = useState("");
  const [viewFilter, setViewFilter] = useState<ViewFilter>("all");
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
    if (!needle) return scopedReports;

    return scopedReports.filter((report) =>
      [report.title, report.summary, report.fileName, report.sourcePath, report.content]
        .some((value) => value.toLowerCase().includes(needle)),
    );
  }, [activeProject, query, viewFilter]);

  const weeklyReportCount = activeProject?.reports.filter((report) => report.cadence === "weekly").length ?? 0;
  const activeId = activeProject ? activeIdByProject[activeProject.id] : "";
  const active = reports.find((report) => report.id === activeId) ?? reports[0];
  const totalReports = index.projects.reduce((sum, project) => sum + project.reports.length, 0);

  return (
    <main className="app-shell">
      <header className="app-header">
        <a className="wordmark" href="/" aria-label="Hermes Dash home">
          Hermes <span className="accent">Dash</span>
        </a>
        <div className="header-meta">
          <span className="header-note">One link per report · {metricLabel(totalReports, "report")}</span>
          <a className="btn" href={managementMode ? "/" : "/manage"}>
            {managementMode ? "Public view" : "Manage"}
          </a>
        </div>
      </header>

      <section className="project-hero" aria-label="Report collection">
        <div>
          <p className="eyebrow">Current feed</p>
          <h1>{activeProject?.name ?? "Reports"}</h1>
          <p>Pick one thing worth opening; each report now leads with one sentence and one source link.</p>
        </div>
        <div className="hero-facts" aria-label="Collection facts">
          <span>{metricLabel(activeProject?.reports.length ?? 0, "entry", "entries")}</span>
          <span>{weeklyReportCount ? `${weeklyReportCount} weekly digests` : "Daily / ad hoc reports"}</span>
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
            <span>{project.reports.length}</span>
          </button>
        ))}
      </nav>

      <div className="app-body">
        <aside className="report-list-panel">
          <div className="list-toolbar">
            <div className="search-field">
              <Search className="h-4 w-4" aria-hidden />
              <input
                type="search"
                placeholder="Search inside this collection…"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                aria-label="Search reports"
              />
            </div>
            {weeklyReportCount ? (
              <div className="filter-pills" aria-label="Report filters">
                <button type="button" data-active={viewFilter === "all"} onClick={() => setViewFilter("all")}>
                  All
                </button>
                <button type="button" data-active={viewFilter === "weekly"} onClick={() => setViewFilter("weekly")}>
                  Weekly
                </button>
              </div>
            ) : null}
          </div>

          <div className="list-count">
            <span>{reports.length} visible</span>
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
                  onClick={() =>
                    setActiveIdByProject((current) => ({ ...current, [report.projectId]: report.id }))
                  }
                >
                  <span className="entry-date">{formatDate(report.reportDate)}</span>
                  <span className="entry-title">{report.title}</span>
                  <span className="entry-summary">{report.summary}</span>
                </button>
              ))}
            </div>
          ) : (
            <p className="empty-copy">No reports match this search.</p>
          )}
        </aside>

        <ReportDetail report={active} managementMode={managementMode} hasProjects={!!activeProject} />
      </div>
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
