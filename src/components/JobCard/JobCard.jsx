/* eslint-disable react/prop-types */ // eslint-disable-next-line react/prop-types

// eslint-disable-next-line react/prop-types
const JobCard = ({ job }) => {
  console.log("data from card job", job);

  return (
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-4">
      <div className="bg-slate-50 rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="md:flex">
          <div className="p-4 w-full">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
              {job.typeOfWork}
            </div>
            <p className="mt-2 text-gray-500">{`Patient Name: ${job.pationName}`}</p>
            <p className="mt-2 text-gray-500">{`Serial: ${job.serial}`}</p>
            <p className="mt-2 text-gray-500">{`Teeth Number: ${job.teethNumber.join(
              ", "
            )}`}</p>
            <p className="mt-2 text-gray-500">{`Shade: ${job.shade}`}</p>
            <p className="mt-2 text-gray-500">{`Deadline: ${new Date(
              job.deadLine
            ).toDateString()}`}</p>
            <p className="mt-2 text-gray-500">{`Price: $${job.price}`}</p>
            <p className="mt-2 text-gray-500">{`Try In: ${
              job.tryIn ? "Yes" : "No"
            }`}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
