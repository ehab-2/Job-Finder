import { ClientPageHeader } from "@/components/common/ClientPageHeader";
import DashboardStats from "@/components/dashboard/DashboardStats";
import RecentApplications from "@/components/dashboard/RecentApplications";
import { CandidateData, JobsData } from "@/data";

function DashboardPage() {
  const interviews = CandidateData.filter(
    (c) => c.status === "INTERVIEW",
  ).length;
  const avgScore = (
    CandidateData.reduce((s, c) => s + c.aiScore, 0) / CandidateData.length
  ).toFixed(1);

  return (
    <>
      <ClientPageHeader title={"OVERVIEW"} subtitle={"ADMIN DASHBOARD"} />
      <DashboardStats
        activeJobs={JobsData.length}
        totalCandidates={CandidateData.length}
        avgScore={avgScore}
        interviews={interviews}
      />
      <RecentApplications candidates={CandidateData} />
    </>
  );
}

export default DashboardPage;
