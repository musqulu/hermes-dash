import type { NextApiRequest, NextApiResponse } from "next";
import { isAuthenticatedRequest } from "@/lib/auth";
import { saveReportComment } from "@/lib/reports";

type ResponseBody =
  | { comment: Awaited<ReturnType<typeof saveReportComment>> }
  | { error: string };

export default async function handler(req: NextApiRequest, res: NextApiResponse<ResponseBody>) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    res.status(405).json({ error: "Method not allowed." });
    return;
  }

  if (!isAuthenticatedRequest(req)) {
    res.status(401).json({ error: "Management login required." });
    return;
  }

  try {
    const { projectId, reportId, comment } = req.body as {
      projectId?: string;
      reportId?: string;
      comment?: string;
    };

    if (!projectId || !reportId || typeof comment !== "string") {
      res.status(400).json({ error: "projectId, reportId, and comment are required." });
      return;
    }

    const saved = await saveReportComment(projectId, reportId, comment);
    res.status(200).json({ comment: saved });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Could not save comment.";
    res.status(400).json({ error: message });
  }
}
