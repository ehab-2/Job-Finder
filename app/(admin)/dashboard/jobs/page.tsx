import AdminPageHeader from "@/components/common/AdminPageHeader";
import JobManagementTable from "@/components/job-management/JobManagementTable";
import { JobsData } from "@/data";

async function JobsManagementPage() {
  return (
    <>
      <AdminPageHeader
        title={"JOBS POSTS"}
        subtitle={`${JobsData.length} ACTIVE LISTINGS`}
        actionButtonLink={"/dashboard/jobs/new"}
        actionButtonVariant={"accent"}
        actionButtonText={"+ CREATE JOB"}
      />
      <JobManagementTable jobs={JobsData} />
    </>
  );
}

export default JobsManagementPage;
