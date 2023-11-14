import { JobsContext } from "../../Context/JobsContext";
import JobCard from "./../JobCard/JobCard";
import { useContext } from "react";

export default function Finished() {
  const { finished } = useContext(JobsContext);
  return (
    <div className="min-h-screen py-6 flex flex-col justify-center sm:py-12 mt-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap -mx-4  content-center items-center ">
          {finished.length >= 1 ? (
            finished.map((job) => <JobCard key={job._id} job={job} />)
          ) : (
            <div className="mt-0 text-center text-2xl text-gray-600 m-auto">
              <p className="mb-4">
                <i className="fa fa-edit fa-2xl"></i>
              </p>
              <p className="mb-4">No finished jobs found.</p>
              <p className="text-xl">Keep up the good work!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
