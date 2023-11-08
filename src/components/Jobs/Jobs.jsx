import { useContext } from "react";
import { JobsContext } from "../../Context/JobsContext";
import JobCard from "./../JobCard/JobCard";

export default function Jobs() {
  const { jobs } = useContext(JobsContext);

  console.log("jobs from context and component jobs", jobs);
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
