import { useState } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
// import { Link, useNavigate } from "react-router-dom";
// import Login from "./Login";

export default function Login() {
  // let navigate = useNavigate();
  const [isLoading, setLoading] = useState(false);
  // const [token, setToken] = useState("");

  const handleLogin = async (values) => {
    console.log("values", values);
    setLoading(true);
    // try {
    //   const res = await axios.post(
    //     "https://trello-backend-tlg1.onrender.com/login",
    //     values
    //   );
    //   console.log(res);
    //   if (res.data.message == "logged in successfully") {
    //     const { token } = res.data;
    //     localStorage.setItem("token", token);
    //     notifySuccess("Success!");
    //     setToken(token);
    //     setTimeout(() => {
    //       navigate("/profile");
    //     }, 1000);
    //     console.log(res);
    //   } else if (
    //     res.data.message == "password not correct" ||
    //     res.data.message == "User not found, You have to register first"
    //   ) {
    //     notifyError("Invalid email or password!");
    //     console.log("faild to login ", res);
    //   }
    // } catch (error) {
    //   console.log("error", error);
    // }
  };

  let validationSchema = Yup.object({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().matches(
      /^(?=.*[A-Z])(?=.*\d).{6,}$/,
      "Invalid password. Password must have at least one uppercase letter, one digit, and be at least 6 characters long."
    ),
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
                  className="capitalize border border-gray-300 rounded-md bg-gray-100 p-2 "
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
