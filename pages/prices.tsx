import type { GetServerSideProps } from "next";
import { ReportDashboard } from "@/components/report-dashboard";
import { getReports, type ReportIndex } from "@/lib/reports";

type PricesProps = {
  reportIndex: ReportIndex;
};

export const getServerSideProps: GetServerSideProps<PricesProps> = async () => {
  const reportIndex = await getReports();

  return {
    props: {
      reportIndex,
    },
  };
};

export default function Prices({ reportIndex }: PricesProps) {
  return <ReportDashboard index={reportIndex} initialView="prices" />;
}
