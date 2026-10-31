import { useState, type ReactNode } from "react";
import JobsContext from "./JobsContext";

const JobsProvider = ({ children }: { children: ReactNode }) => {
  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState<string>("ALL");
  const [locationFilter, setLocationFilter] = useState<string>("ALL");

  return (
    <JobsContext.Provider
      value={{
        search,
        setSearch,
        typeFilter,
        setTypeFilter,
        locationFilter,
        setLocationFilter,
      }}
    >
      {children}
    </JobsContext.Provider>
  );
};

export default JobsProvider;