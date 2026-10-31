import ApplicationsListingWrapper from "@/components/applications/ApplicationsListingWrapper";
import AdminPageHeader from "@/components/common/AdminPageHeader";
import { ApplicationsData } from "@/data";

async function ApplicationsManagementPage() {
  return (
    <>
      <AdminPageHeader
        title={"APPLICATION"}
        subtitle={`${ApplicationsData.length} ACTIVE APPLICATIONS`}
        actionButtonLink={"/dashboard/users"}
        actionButtonVariant={"outline"}
        actionButtonText={"VIEW ALL USERS"}
      />
      <ApplicationsListingWrapper/>
    </>
  );
}

export default ApplicationsManagementPage;
