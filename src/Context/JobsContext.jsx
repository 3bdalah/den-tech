import { createContext, useState, useEffect } from "react";

export const JobsContext = createContext();

// eslint-disable-next-line react/prop-types
export default function TokenContextProvider({ children }) {
  const [token, setToken] = useState(null);
  const [jobs, setJobs] = useState([]);
  const [finished, setJobsFinished] = useState([]);
  const [inProgress, setJobsInPorgress] = useState([]);
  const [nameDoctor, setNameDoctor] = useState("");
  const [password, setPassword] = useState("");
  useEffect(() => {
    const jobsStorage = localStorage.getItem("jobs");
    if (jobsStorage) {
      setJobs(JSON.parse(jobsStorage));
      // console.log("check data on jobs after local storage", jobs);
    }
    const password = localStorage.getItem("password");
    if (password) {
      setPassword(password);
    }
  }, []);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    const dataDoctorProfile = localStorage.getItem("doctorData");
    if (storedToken) {
      setToken(storedToken);
      setNameDoctor(JSON.parse(dataDoctorProfile));
    }
  }, []);
  return (
    <JobsContext.Provider
      value={{
        finished,
        inProgress,
        token,
        setToken,
        jobs,
        setJobs,
        setJobsFinished,
        setJobsInPorgress,
        nameDoctor,
        setNameDoctor,
        setPassword,
        password,
      }}
    >
      {children}
    </JobsContext.Provider>
  );
}
