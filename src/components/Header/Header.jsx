import { Link, useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
// import { getDataUser } from "../../Redux/UserSlice";
// import { TokenContext } from "../../Context/UserContext";

export default function Header() {
  const navigate = useNavigate();
  // const user = useSelector((state) => state.userRed.user);
  // const dispatch = useDispatch();
  const [openDropMenu, setOpenDropMenu] = useState(false);
  // const [dataProfile, setDataProfile] = useState({});
  // const { token, setToken } = useContext(TokenContext);
  // useEffect(() => {
  //   dispatch(getDataUser());
  // }, [dispatch]);

  // useEffect(() => {
  // setDataProfile(user.user);
  // console.log("user data", user.user);
  // }, [user]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    // setToken(null);
    navigate("/about");
  };

  const handleToggleMenu = () => {
    setOpenDropMenu(!openDropMenu);
  };
  return (
    <>
      <nav className=" bg-slate-50 font-semibold font-sans   h-14 w-full  flex flex-row z-1 border-1 mb-0 border-gray-200 m-0 absolute top-0 left-0 z-10 ">
        <div className="custom-container flex justify-between content-center items-center ">
          <div className="flex flex-row items-start justify-center">
            <span className="mx-4">
              <Link
                to="/jobs"
                className="capitalize no-underline text-gray-700"
              >
                Jobs
              </Link>
            </span>
            <span>
              <Link
                to="/chat "
                className=" capitalize no-underline font-semibold font-sans text-gray-700"
              >
                Chat
              </Link>
            </span>
          </div>
          <div className="flex flex-row justify-center content-center items-center">
            <span>
              <div className=" capitalize no-underline w-12 h-12 mt-2 relative z-10">
                {openDropMenu && (
                  <div className="dropmenu absolute top-12 right-1 w-80  h-fit border-1 border-gray-200 shadow-md rounded-sm font-mono bg-slate-50">
                    <div className="group-head-menu flex items-center content-center  bg-slate-100 ">
                      <div className="m-2 h-10 w-10 rounded-md  bg-blue-400 flex items-center justify-center text-white border-1 border-white ">
                        {/* {dataProfile && dataProfile.userName
                            ? dataProfile.userName.substring(0, 1)
                            : ""} */}

                        {"Mahmoud".substring(0, 1)}
                      </div>
                      <p className="flex flex-col text-sm  mt-3 text-gray-500">
                        {/* <span>{dataProfile && dataProfile.userName}</span> */}
                        <span>Mahmoud</span>

                        <span className=" first-letter:capitalize lowercase">
                          {/* {dataProfile && dataProfile.email} */}
                          <span>mahmoud@gmail.com</span>
                        </span>
                      </p>
                    </div>
                    <ul className="list mt-3  ml-0 pl-0 duration-300 transition cursor-pointer font-mono">
                      <li className="text-gray-500  hover:bg-slate-100">
                        <Link
                          to="/profile"
                          onClick={() => handleToggleMenu()} // Invoke the handleLogout function properly
                          className="block text-gray-500  transition duration-300 capitalize no-underline font-semibold py-2 px-4 "
                        >
                          <i className="fa fa-user"></i> view profile
                        </Link>
                      </li>
                      <li className="text-gray-500 hover:bg-slate-100  ">
                        <Link
                          to="/profile"
                          onClick={() => handleToggleMenu()}
                          // Invoke the handleLogout function properly
                          className="block text-gray-500 capitalize no-underline font-semibold py-2 p-4"
                        >
                          <i className="fa fa-lock"></i> Change prassword
                        </Link>
                      </li>
                      <li className="text-gray-500 hover:bg-slate-100">
                        <Link
                          onClick={handleLogout} // Invoke the handleLogout function properly
                          className="block text-gray-500 capitalize no-underline font-semibold py-2 px-4"
                        >
                          <i className="fa fa-arrow-left mr-2"></i>Log out
                        </Link>
                      </li>
                    </ul>
                    <hr></hr>
                    <ul className="list mt-2">
                      <li className="text-gray-500 mb-2 ml-5">
                        <i className="fa fa-share-from-square"></i> Invite
                        Friend
                      </li>
                      <li className="text-gray-500 mb-2 ml-5">
                        <i className="fa fa-comments"></i> Send FeedBack
                      </li>
                    </ul>
                  </div>
                )}
                <div className="flex flex-row items-center justify-center  content-center ">
                  <span className="text-sm float-left mr-3 text-gray-600 font-mono">
                    Mahmoud
                  </span>
                  <div
                    onClick={() => handleToggleMenu()}
                    className=" cursor-pointer h-10 w-10 p-4 rounded-md  capitalize bg-blue-400 flex items-center justify-center text-white border-1 border-white "
                  >
                    {/* {dataProfile && dataProfile.userName
                    ? dataProfile.userName.substring(0, 1)
                    : ""} */}
                    {"Mahmoud".substring(0, 1)}
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
