/* eslint-disable react/prop-types */ // eslint-disable-next-line react/prop-types

// eslint-disable-next-line react/prop-types
const JobCard = ({ job }) => {
  console.log("data from card job", job);

  return (
    <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/3 p-1">
      <div className="bg-slate-50 rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="md:flex">
          <div className="p-0 w-full ">
            <div className="flex flex-row items-center justify-between capitalize tracking-wide text-sm text-gray-700 font-semibold bg-white p-2">
              <span>type : {job.typeOfWork}</span>

              {job.status === "finish" && (
                <span className="bg-green-200 shadow-sm text-green-700 p-2 rounded-md">
                  {job.status}
                </span>
              )}
              {job.status === "build" && (
                <span className="bg-yellow-200 shadow-sm text-yellow-700 p-2 rounded-md">
                  {job.status}
                </span>
              )}
              {job.status === "cast" && (
                <span className="bg-blue-200 shadow-sm text-blue-700 p-2 rounded-md">
                  {job.status}
                </span>
              )}
            </div>
            <div className="p-4">
              <p className="mt-2 text-gray-700 font-mono">
                <span className=" text-gray-500 capitalize font-mono font-semibold">
                  {/* <span className="mr-1 "> */}
                  <i className="fa-solid fa-person fa-xl mr-2"></i>
                  {/* </span> */}
                  Patient Name :
                </span>
                {job.pationName}
              </p>
              <p className="mt-2 text-gray-500">
                {" "}
                <span className="text-gray-500 capitalize font-mono font-semibold">
                  {/* <span className="mr-2 "> */}
                  <i className="fa-solid fa-barcode  mr-2"></i>
                  {/* </span>{" "} */}
                  Serial :
                </span>
                {job.serial}
              </p>
              <p className="mt-2 text-gray-500">
                <span className="text-gray-500 capitalize font-mono font-semibold">
                  {/* <span className="mr-2"> */}
                  <i className="fa-solid fa-tooth  mr-2"></i>
                  {/* </span>{" "} */}
                  Teeth Number :
                </span>
                {job.teethNumber.join(", ")}
              </p>
              <p className=" text-gray-500">
                <span className="text-gray-500 capitalize font-mono font-semibold">
                  {" "}
                  <i className="fa-solid fa-palette mr-2"></i>Shade :
                </span>
                {job.shade}
              </p>
              <p className="mt-2 text-gray-500">
                <span className="text-gray-500 capitalize font-mono font-semibold">
                  {" "}
                  <i className="fa fa-clock mr-2"></i>
                  Deadline:
                </span>
                {new Date(job.deadLine).toDateString()}
              </p>
              <p className="mt-2 text-gray-500 capitalize font-mono font-semibold">
                <i className="fa fa-tags  mr-2"></i>Price: ${job.price} EGP
              </p>
              <p className="mt-2 text-gray-500">
                <span className="text-gray-500 capitalize font-mono font-semibold">
                  <i className="fa-solid fa-vial-circle-check  mr-1"></i>Try In
                  :
                </span>
                {job.tryIn ? "Yes" : "No"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
