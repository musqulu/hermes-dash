import type { GetServerSideProps } from "next";
import { ReportDashboard } from "@/components/report-dashboard";
import { isAuthenticatedRequest } from "@/lib/auth";
import { getReports, type ReportIndex } from "@/lib/reports";

type ManageProps = {
  reportIndex: ReportIndex;
};

export const getServerSideProps: GetServerSideProps<ManageProps> = async (context) => {
  if (!isAuthenticatedRequest(context.req)) {
    return {
      redirect: {
        destination: "/login?next=/manage",
        permanent: false,
      },
    };
  }

  const reportIndex = await getReports();

  return {
    props: {
      reportIndex,
    },
  };
};

export default function Manage({ reportIndex }: ManageProps) {
  return <ReportDashboard index={reportIndex} managementMode />;
}
