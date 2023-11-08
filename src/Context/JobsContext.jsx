import { createContext, useState, useEffect } from "react";

export const JobsContext = createContext();

// eslint-disable-next-line react/prop-types
export default function TokenContextProvider({ children }) {
  const [token, setToken] = useState(null);
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const jobsStorage = localStorage.getItem("jobs");
    if (jobsStorage) {
      setJobs(JSON.parse(jobsStorage)); // Parse the string data from localStorage to an array
    }
  }, []);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);
  return (
    <JobsContext.Provider value={{ token, setToken, jobs, setJobs }}>
      {children}
    </JobsContext.Provider>
  );
}
