import { JobsContext } from "../../Context/JobsContext";
import JobCard from "./../JobCard/JobCard";
import { useContext, useEffect } from "react";
import axios from "axios";
export default function Jobs() {
  const { setJobs, jobs } = useContext(JobsContext);
  const handleGetAllJobs = async () => {
    try {
      const res = await axios.get(
        "https://dentech.onrender.com/getDentistEndUser",
        {
          headers: {
            token: localStorage.getItem("token"),
          },
        }
      );
      if (res.data.message === " data received successfully") {
        const { jobs } = res.data;
        setJobs(jobs); // Assuming setJobs is defined
        localStorage.setItem("jobs", JSON.stringify(jobs));
      } else if (
        res.data.message === "password not correct" ||
        res.data.message === "User not found, You have to register first"
      ) {
        console.log("failed to login ", res);
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    handleGetAllJobs();
  }, []);
  return (
    <div className="min-h-screen py-6 flex flex-col justify-center sm:py-12 mt-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap -mx-4">
          {Array.isArray(jobs) &&
            jobs.map((job) => <JobCard key={job._id} job={job} />)}
        </div>
      </div>
    </div>
  );
}
