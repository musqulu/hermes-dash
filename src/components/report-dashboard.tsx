"use client";

import { useEffect, useMemo, useState, type FormEvent, type ReactNode } from "react";
import { CalendarDays, FileText, MessageSquare, Search } from "lucide-react";
import type { Report, ReportComment, ReportIndex } from "@/lib/reports";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

type Props = {
  index: ReportIndex;
  managementMode?: boolean;
};

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

function cleanInlineMarkdown(value: string) {
  return value
    .replace(/`([^`]+)`/g, "$1")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/\*\*([^*]+)\*\*/g, "$1")
    .trim();
}

function renderInlineMarkdown(value: string): ReactNode[] {
  const nodes: ReactNode[] = [];
  const linkPattern = /\[([^\]]+)\]\((https?:\/\/[^)]+)\)/g;
  let lastIndex = 0;

  for (const match of value.matchAll(linkPattern)) {
    if (match.index > lastIndex) {
      nodes.push(cleanInlineMarkdown(value.slice(lastIndex, match.index)));
    }

    nodes.push(
      <a
        className="classic-link"
        href={match[2]}
        key={`${match[2]}-${match.index}`}
        rel="noreferrer"
        target="_blank"
      >
        {cleanInlineMarkdown(match[1])}
      </a>,
    );
    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < value.length) {
    nodes.push(cleanInlineMarkdown(value.slice(lastIndex)));
  }

  return nodes.filter((node) => node !== "");
}

function renderMarkdownLine(rawLine: string, index: number) {
  const line = rawLine.trim();
  if (!line || line.startsWith("```")) return null;

  const heading = line.match(/^(#{1,6})\s+(.+)$/);
  if (heading) {
    const level = heading[1].length;
    const text = renderInlineMarkdown(heading[2]);

    if (level === 1) {
      return <h2 key={index} className="pt-4 font-ui text-xl font-bold uppercase text-black">{text}</h2>;
    }

    if (level === 2) {
      return <h3 key={index} className="pt-5 font-ui text-base font-bold uppercase text-black">{text}</h3>;
    }

    return <h4 key={index} className="pt-4 font-ui text-sm font-bold uppercase text-black">{text}</h4>;
  }

  const ordered = line.match(/^(\d+)\.\s+(.+)$/);
  if (ordered) {
    return (
      <p key={index} className="pt-3 font-serif text-sm font-bold text-black">
        <span className="mr-2 font-ui text-black">{ordered[1]}.</span> {renderInlineMarkdown(ordered[2])}
      </p>
    );
  }

  const unordered = line.match(/^[-*]\s+(.+)$/);
  if (unordered) {
    return <p key={index} className="pl-4 font-serif text-sm leading-6 text-black">• {renderInlineMarkdown(unordered[1])}</p>;
  }

  return <p key={index} className="font-serif text-sm leading-6 text-black">{renderInlineMarkdown(line)}</p>;
}

export function ReportDashboard({ index, managementMode = false }: Props) {
  const [query, setQuery] = useState("");
  const [activeProjectId, setActiveProjectId] = useState(index.projects[0]?.id ?? "");
  const activeProject = index.projects.find((project) => project.id === activeProjectId) ?? index.projects[0];
  const [activeIdByProject, setActiveIdByProject] = useState<Record<string, string>>(() =>
    Object.fromEntries(index.projects.map((project) => [project.id, project.reports[0]?.id ?? ""])),
  );

  const reports = useMemo(() => {
    if (!activeProject) return [];
    const needle = query.trim().toLowerCase();
    if (!needle) return activeProject.reports;

    return activeProject.reports.filter((report) =>
      [report.title, report.summary, report.fileName, report.sourcePath, report.content]
        .some((value) => value.toLowerCase().includes(needle)),
    );
  }, [activeProject, query]);

  const activeId = activeProject ? activeIdByProject[activeProject.id] : "";
  const active = reports.find((report) => report.id === activeId) ?? reports[0];
  const totalReports = index.projects.reduce((sum, project) => sum + project.reports.length, 0);
  const totalWords = index.projects.reduce(
    (sum, project) => sum + project.reports.reduce((inner, report) => inner + report.wordCount, 0),
    0,
  );
  const latest = index.projects
    .flatMap((project) => project.reports)
    .sort((a, b) => new Date(b.modifiedAt).getTime() - new Date(a.modifiedAt).getTime())[0];

  return (
    <main className="modal-taste page-frame mx-auto flex min-h-screen w-full max-w-[760px] flex-col gap-6 px-3 py-3 md:px-4 md:py-4">
      <header className="dashboard-hero border border-black bg-black text-white md:grid md:grid-cols-[1fr_auto]">
        <div className="dashboard-hero-copy space-y-3 p-4">
          <Badge variant="default" className="bevel-sticker hero-badge w-fit bg-[var(--modal-accent)] text-black">
            Local Markdown report log
          </Badge>
          <div className="space-y-2">
            <h1 className="font-display text-4xl uppercase leading-none md:text-5xl">Hermes <span className="modal-word">Dash</span></h1>
            <p className="hero-subcopy max-w-xl font-serif text-sm text-white">
              {managementMode
                ? "Management view for reviewing reports and saving feedback for future agent improvements."
                : "Open read-only report log for Hermes agent outputs, research briefs, and project ideas."}
            </p>
          </div>
        </div>
        <div className="dashboard-actions space-y-3 border-l border-black bg-[var(--modal-nav)] px-3 py-3 text-xs text-white md:max-w-sm">
          <a
            className="bevel-sticker inline-flex bg-[var(--modal-accent)] px-2 py-1 font-ui text-xs font-bold uppercase text-black transition hover:bg-[var(--modal-accent)]"
            href={managementMode ? "/" : "/manage"}
          >
            {managementMode ? "View public read-only dashboard" : "Login to management dashboard"}
          </a>
        </div>
      </header>

      <section className="project-tabs grid gap-2 md:grid-cols-3">
        {index.projects.map((project) => (
          <button
            key={project.id}
            className={cn(
              "bevel-sticker border border-black px-3 py-2 text-left font-ui text-xs font-bold uppercase transition hover:bg-[var(--tint-lime)]",
              activeProject?.id === project.id && "bg-[var(--tint-periwinkle)] text-black",
            )}
            data-active={activeProject?.id === project.id}
            onClick={() => {
              setActiveProjectId(project.id);
              setQuery("");
            }}
            type="button"
          >
            {project.name} <span className="opacity-70">({project.reports.length})</span>
          </button>
        ))}
      </section>

      <section className="metric-grid grid gap-2 md:grid-cols-4">
        <Metric label="Reports" value={totalReports.toString()} />
        <Metric label="Words indexed" value={totalWords.toLocaleString("en-GB")} />
        <Metric label="Latest" value={latest ? formatDate(latest.reportDate) : "—"} />
        <Metric label="Matching now" value={reports.length.toString()} />
      </section>

      {activeProject ? (
        <Card className="project-intro bg-[var(--tint-sage)]">
          <CardHeader className="p-3">
            <CardTitle className="font-ui text-sm uppercase">{activeProject.name}</CardTitle>
            <CardDescription>{activeProject.description}</CardDescription>
          </CardHeader>
        </Card>
      ) : null}

      <section className="search-shell relative">
        <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
        <Input
          className="pl-9"
          placeholder="Search reports, outcomes, projects, sources…"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
      </section>

      {!activeProject || activeProject.reports.length === 0 ? (
        <Card>
          <CardHeader>
            <CardTitle>No Markdown reports found</CardTitle>
            <CardDescription>
              Save .md cron outputs into the active source folder above, or set the project-specific report directory env var before starting Next.js.
            </CardDescription>
          </CardHeader>
        </Card>
      ) : (
        <section className="grid gap-5">
          <Card className="report-list-card overflow-hidden">
            <CardHeader className="ribbon-title p-3">
              <CardTitle className="font-ui text-sm uppercase">Log entries</CardTitle>
              <CardDescription>Select a report to read it below.</CardDescription>
            </CardHeader>
            <CardContent className="divide-y p-0">
              {reports.map((report) => (
                <ReportRow
                  key={`${report.projectId}-${report.id}`}
                  report={report}
                  active={active?.id === report.id}
                  onClick={() => setActiveIdByProject((current) => ({ ...current, [report.projectId]: report.id }))}
                />
              ))}
              {!reports.length ? <p className="px-6 pb-6 text-sm text-muted-foreground">No reports match your search.</p> : null}
            </CardContent>
          </Card>

          <ReportDetail report={active} managementMode={managementMode} />
        </section>
      )}
    </main>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <Card className="metric-card">
      <CardHeader className="bg-[var(--tint-peach)] p-3">
        <CardDescription className="font-ui text-xs font-bold uppercase text-black">{label}</CardDescription>
        <CardTitle className="font-display text-2xl leading-none">{value}</CardTitle>
      </CardHeader>
    </Card>
  );
}

function ReportRow({ report, active, onClick }: { report: Report; active: boolean; onClick: () => void }) {
  return (
    <button
      className={cn(
        "report-row grid w-full gap-3 border-b border-black px-4 py-3 text-left transition hover:bg-[var(--tint-lime)] md:grid-cols-[7rem_1fr_auto] md:items-center",
        active && "bg-[var(--tint-sky)]",
      )}
      data-active={active}
      onClick={onClick}
      type="button"
    >
      <div className="flex items-center gap-1.5 font-ui text-xs font-bold uppercase text-black md:block">
        <CalendarDays className="h-3.5 w-3.5 md:mb-1" />
        <span>{formatDate(report.reportDate)}</span>
      </div>

      <div className="min-w-0 space-y-1">
        <div className="truncate font-ui font-bold uppercase leading-snug">{report.title}</div>
        <p className="line-clamp-1 font-serif text-sm text-black">{report.summary}</p>
      </div>

      <div className="font-ui text-xs font-bold uppercase text-black md:text-right">
        <div>{metricLabel(report.wordCount, "word")}</div>
        <div>{metricLabel(report.sections.length, "section")}</div>
        {report.comments.length ? <div>{metricLabel(report.comments.length, "comment")}</div> : null}
      </div>
    </button>
  );
}

function ReportDetail({ report, managementMode }: { report?: Report; managementMode: boolean }) {
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
      <Card>
        <CardHeader>
          <CardTitle>No report selected</CardTitle>
        </CardHeader>
      </Card>
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
    const payload = await response.json() as { comment?: ReportComment; error?: string };

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
    <Card className="detail-card">
      <CardHeader className="detail-header space-y-4 bg-[var(--tint-periwinkle)]">
        <div className="flex items-center justify-between gap-3">
          <Badge variant="outline"><FileText className="mr-1 h-3.5 w-3.5" />{report.fileName}</Badge>
          <span className="font-ui text-xs font-bold uppercase text-black">{formatDate(report.reportDate)}</span>
        </div>
        <div className="space-y-2">
          <CardTitle className="font-display text-2xl uppercase leading-tight">{report.title}</CardTitle>
          <CardDescription>{report.summary}</CardDescription>
        </div>
        <div className="flex flex-wrap gap-2 font-ui text-xs font-bold uppercase text-black">
          <span>{metricLabel(report.wordCount, "word")}</span>
          <span>·</span>
          <span>{metricLabel(report.sections.length, "section")}</span>
          <span>·</span>
          <span className="truncate" title={report.sourcePath}>{report.sourcePath}</span>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        {report.highlights.length ? (
          <section className="space-y-2">
            <div className="text-sm font-medium">Outcomes</div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {report.highlights.map((highlight) => <li key={highlight}>• {highlight}</li>)}
            </ul>
          </section>
        ) : null}

        {report.sections.length ? (
          <section className="space-y-2">
            <div className="text-sm font-medium">Sections</div>
            <div className="flex flex-wrap gap-1.5">
              {report.sections.map((section) => <Badge key={section} variant="secondary">{section}</Badge>)}
            </div>
          </section>
        ) : null}

        {managementMode ? (
          <>
            <Separator />

            <section className="space-y-3 border border-black bg-[var(--tint-lime)] p-4">
          <div className="flex items-center gap-2 text-sm font-medium">
            <MessageSquare className="h-4 w-4" /> Feedback → agent improvement draft
          </div>
          <p className="text-sm text-muted-foreground">
            Add feedback after this report. The app saves your comment and creates a draft improvement note for future agent runs.
          </p>
          <form className="space-y-3" onSubmit={submitComment}>
            <textarea
              className="min-h-24 w-full border border-black bg-white px-3 py-2 font-serif text-sm outline-none ring-offset-background placeholder:text-black/60 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              placeholder="What should future agent reports do better?"
              value={comment}
              onChange={(event) => setComment(event.target.value)}
            />
            <div className="flex items-center gap-3">
              <button
                className="bevel-sticker bg-black px-3 py-2 font-ui text-sm font-bold uppercase text-white disabled:opacity-50"
                disabled={status === "saving" || !comment.trim()}
                type="submit"
              >
                {status === "saving" ? "Saving…" : "Save feedback"}
              </button>
              {status === "saved" ? <span className="text-xs text-muted-foreground">Saved as a draft improvement note.</span> : null}
              {status === "error" ? <span className="text-xs text-red-600">{error}</span> : null}
            </div>
          </form>

          {comments.length ? (
            <div className="space-y-3 border-t pt-4">
              {comments.map((item) => (
                <div key={item.id} className="space-y-2 border border-black bg-white p-3 text-sm">
                  <div className="text-xs text-muted-foreground">{formatDate(item.createdAt)} · saved to {item.sourcePath}</div>
                  <p>{item.authorComment}</p>
                  <pre className="whitespace-pre-wrap border border-black bg-white p-3 font-ui text-xs text-black">{item.improvementDraft}</pre>
                </div>
              ))}
            </div>
          ) : null}
            </section>
          </>
        ) : null}

        <Separator />

        <section className="space-y-2">
          <div className="text-sm font-medium">Report text</div>
          <div className="ribbon-body space-y-2 bg-[var(--tint-sage)] p-4">
            {report.content.split("\n").map(renderMarkdownLine)}
          </div>
        </section>
      </CardContent>
    </Card>
  );
}
