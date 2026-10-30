import AdminPageHeader from "@/components/common/AdminPageHeader";
import NewJobForm from "@/components/job-management/NewJobForm"

function NewJobPage() {
  return (
    <>
      <AdminPageHeader
        title={"CREATE JOB"}
        subtitle={"NEW LISTING"}
        actionButtonLink={"/dashboard/jobs"}
        actionButtonVariant={"outline"}
        actionButtonText={"← BACK"}
      />
      <NewJobForm/>
    </>
  );
}

export default NewJobPage;
