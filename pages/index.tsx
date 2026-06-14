import type { GetServerSideProps } from "next";
import { ReportDashboard } from "@/components/report-dashboard";
import { getReports, type ReportIndex } from "@/lib/reports";

type HomeProps = {
  reportIndex: ReportIndex;
};

export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
  const reportIndex = await getReports();

  return {
    props: {
      reportIndex,
    },
  };
};

export default function Home({ reportIndex }: HomeProps) {
  return <ReportDashboard index={reportIndex} />;
}
