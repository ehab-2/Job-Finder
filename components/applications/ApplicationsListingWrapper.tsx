"use client";
import ApplicationsProvider from "@/context/applications/ApplicationsProvider";
import ApplicationsFilter from "./ApplicationsFilter";
import { JobsData } from "@/data";
import ApplicationsStatusSummary from "./ApplicationsStatusSummary";
import ApplicationsTable from "./ApplicationsTable";

function ApplicationsListingWrapper() {
  return (
    <ApplicationsProvider>
      <ApplicationsFilter />
      <ApplicationsStatusSummary/>
      <ApplicationsTable/>
    </ApplicationsProvider>
  );
}

export default ApplicationsListingWrapper;
