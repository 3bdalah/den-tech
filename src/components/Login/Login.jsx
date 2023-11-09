import { useContext, useState } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { JobsContext } from "./../../Context/JobsContext";

export default function Login() {
  const { setToken, setJobs } = useContext(JobsContext);
  let navigate = useNavigate();
  const [isLoading, setLoading] = useState(false);
  const handleLogin = async (values) => {
    console.log("values", values);
    setLoading(true);
    try {
      const res = await axios.post(
        "https://dentech.onrender.com/dentist/login",

        values
      );
      if (res.data.message == "logged in successfully") {
        console.log("data respone", res.data);
        const { token, jobs } = res.data;
        setToken(token);
        setJobs(jobs);
        localStorage.setItem("jobs", JSON.stringify(jobs));
        localStorage.setItem("token", token);
        navigate("/");
      } else if (
        res.data.message == "password not correct" ||
        res.data.message == "User not found, You have to register first"
      ) {
        // notifyError("Invalid email or password!");
        console.log("faild to login ", res);
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  let validationSchema = Yup.object({
    email: Yup.string().email("invalid email").required("Email is required"),
    password: Yup.string(),
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
        <div className="box-img w-full opacity-30 absolute bottom-0 left-0 z-0">
          <img src="./doctor.svg" alt="doctor" />
        </div>
        <div
          className="container flex flex-col items-center justify-center  mt-6
         content-center"
        >
          <div className=" border p-1 border-gray-200  rounded-md shadow-lg w-96 h-96 bg-gray-50 mt-24 z-10">
            <div className="font-mono text-3xl text-slate-700 text-center my-6">
              Login
            </div>
            <form onSubmit={formik.handleSubmit}>
              <div className="group-input flex flex-col w-5/6 m-auto mt-4">
                <label
                  htmlFor="email"
                  className="float-left text-left font-mono text-gray-500 mb-2"
                >
                  Email:
                </label>
                <input
                  className=" border border-gray-300 rounded-md bg-gray-100 p-2 "
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
                className="flex place-items-center hover:text-white bg-blue-400 hover:bg-blue-700 duration-300 transition  rounded-md  border-1 border-gray-400 shadow-md px-10  py-2 font-mono font-semibold capitalize mt-10 mx-auto"
              >
                login
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
