import { useContext, useState } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { JobsContext } from "./../../Context/JobsContext";
import toast, { Toaster } from "react-hot-toast";
export default function Login() {
  const { setToken, setJobs, setNameDoctor } = useContext(JobsContext);
  let navigate = useNavigate();
  const [isLoading, setLoading] = useState(false);
  const successLogin = () => {
    toast.success("Welcome doctor");
  };
  const failedLogin = (message) => {
    toast.error(message);
  };
  const handleLogin = async (values) => {
    console.log("Start request to login", isLoading);
    setLoading(true);
    try {
      const response = await axios.post(
        "https://dentech.onrender.com/dentist/login",

        values
      );

      // console.log("ressssssss", res);
      if (response.data.message == "logged in successfully") {
        successLogin();
        console.log("data respone", response.data);
        const { token, jobs, foundedDentist } = response.data;
        setNameDoctor(foundedDentist);
        setToken(token);
        setJobs(jobs);
        setLoading(false);
        localStorage.setItem("jobs", JSON.stringify(jobs));
        localStorage.setItem("token", token);
        localStorage.setItem("doctorData", JSON.stringify(foundedDentist));
        navigate("/");
      } else if (
        response.data.message === "'invalid email or password'" ||
        response.data.message === "User not found, You have to register first"
      ) {
        // notifyError("Invalid email or password!");
        failedLogin("Invalid email or password!");
        setLoading(false);
        console.log("faild to login ", response);
      }
    } catch (error) {
      console.log("error", error);
      failedLogin("Invalid email or password!");
      console.log("faild to login ");
      setLoading(false);
    }
  };

  let validationSchema = Yup.object({
    email: Yup.string().email("invalid email").required("Email is required"),
    password: Yup.string().required("required password"),
  });
  let formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: (values) => {
      handleLogin(values);
      console.log("loading", isLoading);
    },
  });

  return (
    <>
      <div className=" bg-blue-50  m-0 relative h-screen">
        <Toaster />
        <div className="box-img w-full opacity-30 absolute bottom-0 left-0 z-0">
          <img src="./doctor.svg" alt="doctor" />
        </div>
        <div className=" flex flex-col items-center justify-center mt-6 content-center p-3">
          <div className=" border p-1 border-gray-200 rounded-md shadow-lg w-full md:w-2/5  bg-gray-50 mt-24 z-10 pb-3">
            <div className="font-mono text-3xl text-slate-700 text-center my-6">
              Login
            </div>
            {isLoading === false ? (
              <form onSubmit={formik.handleSubmit}>
                <div className="group-input flex flex-col w-5/6 m-auto mt-4">
                  <label
                    htmlFor="email"
                    className="float-left text-left font-mono text-gray-500 mb-2"
                  >
                    Email:
                  </label>
                  <input
                    className="border border-gray-300 rounded-md bg-gray-100 p-2 w-full"
                    type="email"
                    name="email"
                    placeholder=" your email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                  />
                  {formik.errors.email && formik.touched.email ? (
                    <div className="alert alert-danger">
                      {formik.errors.email}
                    </div>
                  ) : null}
                </div>

                <div className="group-input flex flex-col w-5/6 m-auto mt-4">
                  <label
                    htmlFor="email"
                    className="float-left text-left font-mono text-gray-500 mb-2"
                  >
                    Password:
                  </label>
                  <input
                    className="border capitalize border-1 border-gray-300 rounded-md bg-gray-100 p-2 "
                    type="password"
                    name="password"
                    placeholder=" your password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                  />
                  {formik.errors.password && formik.touched.password ? (
                    <div className="alert alert-danger">
                      {formik.errors.password}
                    </div>
                  ) : null}
                </div>

                <button
                  type="submit"
                  className="flex place-items-center hover:text-white bg-blue-400 hover:bg-blue-700 duration-300 transition rounded-md border-1 border-gray-400 shadow-md px-6 py-3 font-mono font-semibold capitalize mt-10 mx-auto"
                >
                  login
                </button>
              </form>
            ) : (
              <h3 className=" text-center text-2xl h-full mt-28"> loading</h3>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
