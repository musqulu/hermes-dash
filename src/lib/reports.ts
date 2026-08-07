import * as fs from "node:fs/promises";
import * as path from "node:path";

export type ReportComment = {
  id: string;
  createdAt: string;
  authorComment: string;
  improvementDraft: string;
  sourcePath: string;
};

export type ReportItem = {
  id: string;
  projectId: string;
  reportId: string;
  reportDate: string;
  title: string;
  url: string | null;
  status: string;
  isActive: boolean;
  source: string | null;
  location: string | null;
  pricePln: number | null;
  specs: string | null;
  summary: string;
  firstSeen: string;
  lastSeen: string;
  seenCount: number;
  priceHistory: { date: string; pricePln: number | null; reportId: string }[];
};

export type Report = {
  id: string;
  projectId: string;
  title: string;
  summary: string;
  cadence: "weekly" | "daily" | "other";
  reportDate: string;
  modifiedAt: string;
  sourcePath: string;
  fileName: string;
  primaryLink: string | null;
  wordCount: number;
  sections: string[];
  highlights: string[];
  content: string;
  comments: ReportComment[];
  items: ReportItem[];
};

export type ReportProject = {
  id: string;
  name: string;
  description: string;
  sourceDir: string;
  reports: Report[];
  items: ReportItem[];
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
    id: "property-scout",
    name: "Property scout",
    description: "English buyer-side scouting reports for Polish countryside properties and rural land opportunities.",
    envVar: "HERMES_PROPERTY_REPORTS_DIR",
    defaultDir: path.join(reportsRoot, "property-scout"),
  },
  {
    id: "mac-studio-scout",
    name: "Mac Studio scout",
    description: "Polish marketplace watch for high-RAM Mac Studio Ultra listings, deal spotting, and configuration price tracking for local LLM rigs.",
    envVar: "HERMES_MAC_STUDIO_REPORTS_DIR",
    defaultDir: path.join(reportsRoot, "mac-studio-scout"),
  },
  {
    id: "mac-studio-ultra",
    name: "Mac Studio Ultra deals",
    description: "Twice-daily actionable watch for high-RAM Apple Mac Studio Ultra machines in Poland for local LLM rigs.",
    envVar: "HERMES_MAC_STUDIO_ULTRA_REPORTS_DIR",
    defaultDir: path.join(reportsRoot, "mac-studio-ultra"),
  },
  {
    id: "mac-mini-agent-farm",
    name: "Mac mini agent farm",
    description: "Daily watch for super-cheap Apple Silicon Mac minis in Poland/EU, tracking RAM/value for API-agent nodes and light local LLM experiments.",
    envVar: "HERMES_MAC_MINI_AGENT_FARM_REPORTS_DIR",
    defaultDir: path.join(reportsRoot, "mac-mini-agent-farm"),
  },
  {
    id: "home-ai-rig-scout",
    name: "Home AI rig scout",
    description: "Daily BUY/WATCH scouting for used GPU accelerators, 4-GPU workstations, and server parts for a local home AI rig in Poland/EU.",
    envVar: "HERMES_HOME_AI_RIG_REPORTS_DIR",
    defaultDir: path.join(reportsRoot, "home-ai-rig-scout"),
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

  return line ? cleanMarkdown(line.replace(/^\s*(?:[-*]|\d+\.)\s+/, "")).slice(0, 180) : "No summary available yet.";
}

function extractPrimaryLink(content: string) {
  const markdownLink = content.match(/\[[^\]]+\]\((https?:\/\/[^)\s]+)\)/);
  if (markdownLink) return markdownLink[1];

  const bareUrl = content.match(/https?:\/\/[^\s)\]>"']+/);
  return bareUrl ? bareUrl[0].replace(/[.,;:!?]+$/, "") : null;
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

function inferCadence(fileName: string, title: string): Report["cadence"] {
  const haystack = `${fileName}\n${title}`.toLowerCase();
  if (haystack.includes("weekly") || haystack.includes("digest") || haystack.includes("ratings")) {
    return "weekly";
  }
  if (haystack.includes("daily") || /scout-20\d{2}[-_]\d{2}[-_]\d{2}/.test(haystack)) {
    return "daily";
  }
  return "other";
}


function normalizeStatus(value: string) {
  const cleaned = cleanMarkdown(value).trim().toUpperCase();
  if (!cleaned) return "WATCH";
  if (cleaned.includes("BUY")) return "BUY";
  if (cleaned.includes("ASK")) return "ASK FIRST";
  if (cleaned.includes("WATCH")) return "WATCH";
  if (cleaned.includes("IGNORE")) return "IGNORE";
  if (cleaned.includes("BEST")) return "BEST";
  return cleaned.slice(0, 24);
}

function parsePricePln(value: string) {
  const match = value.match(/(?:^|[^\d])(\d[\d\s.,]{2,})\s*(?:PLN|zł|zl)/i);
  if (!match) return null;
  const normalized = match[1].replace(/\s/g, "").replace(/,(?=\d{1,2}\b)/, ".").replace(/\.(?=\d{3}\b)/g, "");
  const parsed = Number.parseFloat(normalized);
  return Number.isFinite(parsed) ? parsed : null;
}

function itemKey(title: string, url: string | null) {
  if (url) return url.toLowerCase().replace(/\?.*$/, "").replace(/\/$/, "");
  return cleanMarkdown(title).toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

function parseMetadataFromBullets(lines: string[]) {
  let pricePln: number | null = null;
  let specs: string | null = null;
  let source: string | null = null;
  let location: string | null = null;
  let why = "";

  for (const raw of lines) {
    const line = cleanMarkdown(raw.replace(/^\s*(?:[-*]|\d+\.)\s+/, ""));
    const lower = line.toLowerCase();
    if (lower.startsWith("price/config:") || lower.startsWith("price:")) {
      const value = line.replace(/^[^:]+:\s*/, "");
      pricePln = parsePricePln(value) ?? pricePln;
      const parts = value.split(/\s+—\s+/).map((part) => part.trim().replace(/[.]+$/, "")).filter(Boolean);
      specs = parts[1] || specs;
      if (parts.length >= 3) location = parts[parts.length - 2] || location;
      if (parts.length >= 4) source = parts[parts.length - 1] || source;
    } else if (lower.startsWith("why it matters:") || lower.startsWith("why:")) {
      why = line.replace(/^[^:]+:\s*/, "");
    } else if (!pricePln) {
      pricePln = parsePricePln(line) ?? pricePln;
    }
  }

  return { pricePln, specs, source, location, summary: why };
}

function extractReportItems(content: string, projectId: string, reportId: string, reportDate: string): ReportItem[] {
  const lines = content.split("\n");
  const items: ReportItem[] = [];

  for (let i = 0; i < lines.length; i++) {
    const heading = lines[i].match(/^###\s+(.+?)(?:\s+[—-]\s+|:\s+)(?:\[([^\]]+)\]\((https?:\/\/[^)]+)\)|(.+))\s*$/);
    if (!heading) continue;

    const status = normalizeStatus(heading[1]);
    const title = cleanMarkdown(heading[2] ?? heading[4] ?? "Untitled item");
    const url = heading[3] ?? null;
    const bulletLines: string[] = [];
    let j = i + 1;
    while (j < lines.length && !lines[j].startsWith("### ") && !lines[j].startsWith("## ")) {
      if (/^\s*(?:[-*]|\d+\.)\s+/.test(lines[j])) bulletLines.push(lines[j]);
      j++;
    }

    const metadata = parseMetadataFromBullets(bulletLines);
    items.push({
      id: itemKey(title, url),
      projectId,
      reportId,
      reportDate,
      title,
      url,
      status,
      isActive: false,
      source: metadata.source,
      location: metadata.location,
      pricePln: metadata.pricePln,
      specs: metadata.specs,
      summary: metadata.summary || extractSummary(bulletLines.join("\n")),
      firstSeen: reportDate,
      lastSeen: reportDate,
      seenCount: 1,
      priceHistory: [{ date: reportDate, pricePln: metadata.pricePln, reportId }],
    });
    i = j - 1;
  }

  return items;
}

function dedupeProjectItems(reports: Report[]) {
  const latestDate = reports
    .filter((report) => report.items.length > 0)
    .reduce((current, report) => report.reportDate > current ? report.reportDate : current, "");
  const byKey = new Map<string, ReportItem>();

  for (const report of [...reports].sort((a, b) => a.reportDate.localeCompare(b.reportDate))) {
    for (const item of report.items) {
      const existing = byKey.get(item.id);
      if (!existing) {
        byKey.set(item.id, { ...item });
        continue;
      }

      existing.firstSeen = existing.firstSeen < item.reportDate ? existing.firstSeen : item.reportDate;
      existing.lastSeen = existing.lastSeen > item.reportDate ? existing.lastSeen : item.reportDate;
      existing.seenCount += 1;
      existing.priceHistory.push(...item.priceHistory);
      if (item.reportDate >= existing.reportDate) {
        existing.reportId = item.reportId;
        existing.reportDate = item.reportDate;
        existing.title = item.title || existing.title;
        existing.url = item.url || existing.url;
        existing.status = item.status || existing.status;
        existing.source = item.source || existing.source;
        existing.location = item.location || existing.location;
        existing.pricePln = item.pricePln ?? existing.pricePln;
        existing.specs = item.specs || existing.specs;
        existing.summary = item.summary || existing.summary;
      }
    }
  }

  return Array.from(byKey.values())
    .map((item) => ({
      ...item,
      isActive: item.lastSeen === latestDate,
      priceHistory: item.priceHistory
        .filter((point, index, arr) => arr.findIndex((other) => other.date === point.date && other.pricePln === point.pricePln) === index)
        .sort((a, b) => a.date.localeCompare(b.date)),
    }))
    .sort((a, b) => Number(b.isActive) - Number(a.isActive) || (a.pricePln ?? Infinity) - (b.pricePln ?? Infinity) || b.lastSeen.localeCompare(a.lastSeen));
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
  const title = extractTitle(content, id);

  const reportDate = inferDate(fileName, content, stats.mtime);
  const items = extractReportItems(content, projectId, id, reportDate);

  return {
    id,
    projectId,
    title,
    summary: extractSummary(content),
    cadence: inferCadence(fileName, title),
    reportDate,
    modifiedAt: stats.mtime.toISOString(),
    sourcePath: displayPath(filePath),
    fileName,
    primaryLink: extractPrimaryLink(content),
    wordCount: content.match(/\w+/g)?.length ?? 0,
    sections: extractSections(content),
    highlights: extractHighlights(content),
    content,
    comments: await readComments(projectId, id),
    items,
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
      items: [],
    };
  }

  const entries = await fs.readdir(sourceDir, { withFileTypes: true });
  const markdownFiles = entries
    .filter((entry) => entry.isFile() && entry.name.toLowerCase().endsWith(".md"))
    .map((entry) => path.join(sourceDir, entry.name));

  const reports = await Promise.all(markdownFiles.map((filePath) => readReport(filePath, config.id)));
  reports.sort((a, b) => {
    const dateDelta = new Date(b.reportDate).getTime() - new Date(a.reportDate).getTime();
    if (dateDelta !== 0) return dateDelta;
    return new Date(b.modifiedAt).getTime() - new Date(a.modifiedAt).getTime();
  });

  const items = dedupeProjectItems(reports);

  return {
    id: config.id,
    name: config.name,
    description: config.description,
    sourceDir: displayPath(sourceDir),
    reports,
    items,
  };
}

export async function getReports(): Promise<ReportIndex> {
  return {
    generatedAt: new Date().toISOString(),
    projects: await Promise.all(projectConfigs.map(getProject)),
  };
}
