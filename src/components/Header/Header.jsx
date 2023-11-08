import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { JobsContext } from "../../Context/JobsContext";
export default function Header() {
  const { token, setToken, setJobs } = useContext(JobsContext);
  const [openDropMenu, setOpenDropMenu] = useState(false);
  const navigate = useNavigate();
  const handleToggleMenu = () => {
    setOpenDropMenu(!openDropMenu);
  };

  const handleLogout = () => {
    localStorage.clear();
    setToken(null);
    setJobs([]);
    navigate("/login");
  };
  return (
    <>
      <nav className=" bg-slate-50 font-mono font-semibold   h-14 w-full  flex flex-row z-1 border-1 mb-0 border-gray-200 m-0 absolute top-0 left-0 z-10 ">
        <div className="custom-container flex justify-between content-center items-center ">
          <div className="flex flex-row items-start justify-center">
            {!token ? (
              <>
                {" "}
                <span className="mx-4">
                  <Link
                    to="/jobs"
                    className="capitalize font-mono no-underline text-gray-700"
                  >
                    Login
                  </Link>
                </span>
              </>
            ) : (
              <>
                {" "}
                <span className="mx-4">
                  <Link
                    to="/jobs"
                    className="capitalize font-mono no-underline text-gray-700"
                  >
                    My-Jobs
                  </Link>
                </span>
                <span
                  className="cursor-pointer text-gray-500"
                  onClick={() => handleLogout()}
                >
                  Logout
                </span>
              </>
            )}
          </div>
          <div className="flex flex-row justify-center content-center items-center">
            <span>
              <div className=" capitalize no-underline w-12 h-12 mt-2 relative z-10">
                <div className="flex flex-row items-center justify-center  content-center ">
                  <span className="text-sm float-left mr-3 text-gray-600 font-mono">
                    Doctor
                  </span>
                  <div
                    onClick={() => handleToggleMenu()}
                    className=" cursor-pointer h-10 w-10 p-4 rounded-md  capitalize bg-blue-400 flex items-center justify-center text-white border-1 border-white "
                  >
                    {/* {dataProfile && dataProfile.userName
                    ? dataProfile.userName.substring(0, 1)
                    : ""} */}
                    {"Doctor".substring(0, 1)}
                  </div>
                </div>
              </div>
            </span>
          </div>
        </div>
      </nav>
    </>
  );
}
