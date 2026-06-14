import * as fs from "node:fs/promises";
import * as path from "node:path";

export type ReportComment = {
  id: string;
  createdAt: string;
  authorComment: string;
  improvementDraft: string;
  sourcePath: string;
};

export type Report = {
  id: string;
  projectId: string;
  title: string;
  summary: string;
  reportDate: string;
  modifiedAt: string;
  sourcePath: string;
  fileName: string;
  wordCount: number;
  sections: string[];
  highlights: string[];
  content: string;
  comments: ReportComment[];
};

export type ReportProject = {
  id: string;
  name: string;
  description: string;
  sourceDir: string;
  reports: Report[];
};

export type ReportIndex = {
  generatedAt: string;
  projects: ReportProject[];
};

type ProjectConfig = {
  id: string;
  name: string;
  description: string;
  envVar?: string;
  defaultDir: string;
};

const repoRoot = process.cwd();
const reportsRoot = path.join(repoRoot, "content", "reports");
const commentsRoot = process.env.HERMES_DASH_COMMENTS_DIR
  ? path.resolve(process.env.HERMES_DASH_COMMENTS_DIR)
  : path.join(repoRoot, "content", "comments");

const projectConfigs: ProjectConfig[] = [
  {
    id: "hermes-workflows",
    name: "Hermes workflows",
    description: "Daily reports about Hermes Agent, autonomous-agent workflows, and practical setup ideas.",
    envVar: "HERMES_WORKFLOW_REPORTS_DIR",
    defaultDir: path.join(reportsRoot, "hermes-workflows"),
  },
  {
    id: "moltbook",
    name: "Moltbook scout",
    description: "Read-only Moltbook learning reports about Hermes setup, agent use cases, and daily-life workflows.",
    envVar: "HERMES_MOLTBOOK_REPORTS_DIR",
    defaultDir: path.join(reportsRoot, "moltbook"),
  },
  {
    id: "project-ideas",
    name: "Project ideas",
    description: "Research-backed MVP ideas with difficulty, monetisation options, competitor notes, risks, and next-step recommendations.",
    envVar: "HERMES_PROJECT_IDEAS_DIR",
    defaultDir: path.join(reportsRoot, "project-ideas"),
  },
];

const headingPattern = /^(#{1,6})\s+(.+?)\s*$/gm;
const datePattern = /(20\d{2})[-_](\d{2})[-_](\d{2})/;
const listItemPattern = /^\s*(?:[-*]|\d+\.)\s+(.+)$/;

async function exists(targetPath: string) {
  try {
    await fs.access(targetPath);
    return true;
  } catch {
    return false;
  }
}

async function getReportDir(config: ProjectConfig) {
  if (config.envVar && process.env[config.envVar]) {
    return path.resolve(process.env[config.envVar] as string);
  }

  return config.defaultDir;
}

function cleanMarkdown(value: string) {
  return value
    .replace(/`([^`]+)`/g, "$1")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/[*_#>]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function extractTitle(content: string, fallback: string) {
  headingPattern.lastIndex = 0;
  const match = headingPattern.exec(content);
  return match ? cleanMarkdown(match[2]) : fallback.replace(/[-_]/g, " ");
}

function extractSummary(content: string) {
  const line = content
    .split("\n")
    .map((item) => item.trim())
    .find((item) => item && !item.startsWith("#") && !item.startsWith("```"));

  return line ? cleanMarkdown(line).slice(0, 260) : "No summary available yet.";
}

function extractSections(content: string) {
  headingPattern.lastIndex = 0;
  return Array.from(content.matchAll(headingPattern))
    .filter((match) => match[1].length <= 2)
    .slice(1, 8)
    .map((match) => cleanMarkdown(match[2]));
}

function extractHighlights(content: string) {
  const highlights: string[] = [];

  for (const line of content.split("\n")) {
    const match = listItemPattern.exec(line);
    if (!match) continue;

    const highlight = cleanMarkdown(match[1].split(" - ")[0]).slice(0, 140);
    if (highlight && !highlights.includes(highlight)) highlights.push(highlight);
    if (highlights.length >= 5) break;
  }

  return highlights;
}

function inferDate(fileName: string, content: string, modifiedAt: Date) {
  const match = datePattern.exec(`${fileName}\n${content.slice(0, 500)}`);
  if (match) return `${match[1]}-${match[2]}-${match[3]}`;
  return modifiedAt.toISOString().slice(0, 10);
}

function safeSegment(value: string) {
  return value.replace(/[^a-zA-Z0-9._-]/g, "-").slice(0, 120);
}

function displayPath(filePath: string) {
  const relative = path.relative(repoRoot, filePath);
  return relative.startsWith("..") ? filePath : relative;
}

function commentPath(projectId: string, reportId: string) {
  return path.join(commentsRoot, safeSegment(projectId), `${safeSegment(reportId)}.json`);
}

async function readComments(projectId: string, reportId: string): Promise<ReportComment[]> {
  const targetPath = commentPath(projectId, reportId);
  if (!(await exists(targetPath))) return [];

  try {
    const parsed = JSON.parse(await fs.readFile(targetPath, "utf-8")) as { comments?: ReportComment[] };
    return Array.isArray(parsed.comments) ? parsed.comments : [];
  } catch {
    return [];
  }
}

function buildImprovementDraft(comment: string, reportTitle: string) {
  return [
    "Proposed agent improvement draft based on dashboard feedback:",
    "",
    `Context: feedback was left on report \"${reportTitle}\".`,
    "",
    "Suggested non-protected addition:",
    `- Adjust future agent reports to account for this operator feedback: ${comment}`,
    "",
    "Guardrail: do not edit, weaken, or override protected privacy boundaries, local-only model requirements, or no-posting/no-personal-disclosure rules.",
  ].join("\n");
}

export async function saveReportComment(projectId: string, reportId: string, authorComment: string) {
  const trimmed = authorComment.trim();
  if (!trimmed) throw new Error("Comment cannot be empty.");
  if (trimmed.length > 4000) throw new Error("Comment is too long.");

  const index = await getReports();
  const report = index.projects
    .find((project) => project.id === projectId)
    ?.reports.find((item) => item.id === reportId);

  if (!report) throw new Error("Report not found.");

  const targetPath = commentPath(projectId, reportId);
  const comments = await readComments(projectId, reportId);
  const createdAt = new Date().toISOString();
  const nextComment: ReportComment = {
    id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    createdAt,
    authorComment: trimmed,
    improvementDraft: buildImprovementDraft(trimmed, report.title),
    sourcePath: displayPath(targetPath),
  };

  const nextComments = [...comments, nextComment];
  await fs.mkdir(path.dirname(targetPath), { recursive: true });
  await fs.writeFile(targetPath, JSON.stringify({ comments: nextComments }, null, 2), "utf-8");
  return nextComment;
}

async function readReport(filePath: string, projectId: string): Promise<Report> {
  const content = await fs.readFile(filePath, "utf-8");
  const stats = await fs.stat(filePath);
  const fileName = path.basename(filePath);
  const id = path.basename(filePath, path.extname(filePath));

  return {
    id,
    projectId,
    title: extractTitle(content, id),
    summary: extractSummary(content),
    reportDate: inferDate(fileName, content, stats.mtime),
    modifiedAt: stats.mtime.toISOString(),
    sourcePath: displayPath(filePath),
    fileName,
    wordCount: content.match(/\w+/g)?.length ?? 0,
    sections: extractSections(content),
    highlights: extractHighlights(content),
    content,
    comments: await readComments(projectId, id),
  };
}

async function getProject(config: ProjectConfig): Promise<ReportProject> {
  const sourceDir = await getReportDir(config);

  if (!(await exists(sourceDir))) {
    return {
      id: config.id,
      name: config.name,
      description: config.description,
      sourceDir: displayPath(sourceDir),
      reports: [],
    };
  }

  const entries = await fs.readdir(sourceDir, { withFileTypes: true });
  const markdownFiles = entries
    .filter((entry) => entry.isFile() && entry.name.toLowerCase().endsWith(".md"))
    .map((entry) => path.join(sourceDir, entry.name));

  const reports = await Promise.all(markdownFiles.map((filePath) => readReport(filePath, config.id)));
  reports.sort((a, b) => new Date(b.modifiedAt).getTime() - new Date(a.modifiedAt).getTime());

  return {
    id: config.id,
    name: config.name,
    description: config.description,
    sourceDir: displayPath(sourceDir),
    reports,
  };
}

export async function getReports(): Promise<ReportIndex> {
  return {
    generatedAt: new Date().toISOString(),
    projects: await Promise.all(projectConfigs.map(getProject)),
  };
}
