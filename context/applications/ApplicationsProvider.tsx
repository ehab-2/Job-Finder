import { useState, type ReactNode } from "react";
import { ApplicationsData, JobsData } from "@/data";
import { CandidateData} from "@/data";
import { getCandidate } from "@/utils";
import ApplicationsContext from "./ApplicationsContext";
import { Application, Job } from "@/types";

const ApplicationsProvider = ({ children }: { children: ReactNode }) => {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("ALL");
  const [jobFilter, setJobFilter] = useState<string>("ALL");
  const [jobs, setJobs] = useState<Job[]>(JobsData)
    const [applications, setApplications] = useState<Application[]>(ApplicationsData);

  const filteredApplications = applications.filter((app) => {
    const candidate = getCandidate(app.candidateId, CandidateData);
    const matchesSearch =
      !search ||
      (candidate &&
        (candidate.name.toLowerCase().includes(search.toLowerCase()) ||
          candidate.email.toLowerCase().includes(search.toLowerCase()) ||
          app.role.toLowerCase().includes(search.toLowerCase())));
    const matchesStatus = statusFilter === "ALL" || app.status === statusFilter;
    const matchesJob = jobFilter === "ALL" || app.jobId === jobFilter;
    return matchesSearch && matchesStatus && matchesJob;
  });

  return (
    <ApplicationsContext.Provider
      value={{
        search,
        setSearch,
        statusFilter,
        setStatusFilter,
        jobFilter,
        setJobFilter,
        filteredApplications,
        jobs,
        setJobs,
        applications,
        setApplications,
      }}
    >
      {children}
    </ApplicationsContext.Provider>
  );
};

export default ApplicationsProvider;
