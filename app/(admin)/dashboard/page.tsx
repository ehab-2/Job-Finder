import { ClientPageHeader } from "@/components/common/ClientPageHeader";
import DashboardStats from "@/components/dashboard/DashboardStats";
import RecentApplications from "@/components/dashboard/RecentApplications";
import { ApplicationsData, JobsData } from "@/data";

function DashboardPage() {
  const interviews = ApplicationsData.filter(
    (c) => c.status === "INTERVIEW",
  ).length;
  const avgScore = (
    ApplicationsData.reduce((s, c) => s + c.aiScore, 0) / ApplicationsData.length
  ).toFixed(1);

  return (
    <>
      <ClientPageHeader title={"OVERVIEW"} subtitle={"ADMIN DASHBOARD"} />
      <DashboardStats
        activeJobs={JobsData.length}
        totalCandidates={ApplicationsData.length}
        avgScore={avgScore}
        interviews={interviews}
      />
      <RecentApplications applications={ApplicationsData} />
    </>
  );
}

export default DashboardPage;
