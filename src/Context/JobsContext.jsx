import { createContext, useState, useEffect } from "react";

export const JobsContext = createContext();

// eslint-disable-next-line react/prop-types
export default function TokenContextProvider({ children }) {
  const [token, setToken] = useState(null);
  const [jobs, setJobs] = useState([]);
  const [finished, setJobsFinished] = useState([]);
  const [inProgress, setJobsInPorgress] = useState([]);
  useEffect(() => {
    const jobsStorage = localStorage.getItem("jobs");
    if (jobsStorage) {
      setJobs(JSON.parse(jobsStorage));
      const finishedJobs = jobs.filter((job) => job.status === "finish");
      setJobsFinished(finishedJobs);
      const inProgressJobs = jobs.filter(
        (job) => job.status === "build" || job.status === "cast"
      );
      setJobsInPorgress(inProgressJobs);
    }
  }, []);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);
  return (
    <JobsContext.Provider
      value={{ finished, inProgress, token, setToken, jobs, setJobs }}
    >
      {children}
    </JobsContext.Provider>
  );
}
