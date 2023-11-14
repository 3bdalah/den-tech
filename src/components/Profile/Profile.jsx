// eslint-disable-next-line react/prop-types
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";

import { useState, useEffect } from "react";
import moment from "moment/moment";
import { useContext } from "react";
import { JobsContext } from "./../../Context/JobsContext";
import toast, { Toaster } from "react-hot-toast";
export default function Profile() {
  const [openEdit, setOpenEdit] = useState(false);
  const { nameDoctor } = useContext(JobsContext);
  const [loading, setLoading] = useState(false);
  const successEdit = () => {
    toast.success("Success Edited Accounet");
  };
  console.log("name doctor data from profile ", nameDoctor);
  const togglePopEdit = () => {
    setOpenEdit((prev) => !prev);
  };

  useEffect(() => {
    console.log("flag toggle open pop up", openEdit);
  }, [openEdit]);

  const handleEditProfile = async (values) => {
    setLoading(true);
    try {
      let data = await axios.patch(
        "https://dentech.onrender.com/updateDentistEndUser/111111",
        { ...values },
        {
          headers: {
            token: localStorage.getItem("token"),
          },
        }
      );

      if (data.data.message === "Dentist Updated") {
        setLoading(false);
        successEdit();
        console.log("done edite");
      }
      setLoading(false);
      console.log("data after edit", data);
      // notifySuccess(`Task Successed edit`);
      togglePopEdit();
      // getAllCreatedTasks();
    } catch (error) {
      console.log("error to update", error);
    }
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  let formikEditProfile = useFormik({
    initialValues: {
      email: nameDoctor && nameDoctor.email,
      password: "", // Provide an appropriate initial value for the password
    },
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      handleEditProfile(values);
      resetForm();
    },
  });
  return (
    <>
      <Toaster />
      {openEdit && (
        <div className=" w-screen  min-h-screen bg-black fixed bg-opacity-20 top-0 flex justify-center z-50">
          {/* <div className=" h-full p-5  rounded-md "> */}
          {/* --------------------------------------------------- */}
          <div className="mt-14 flex flex-col justify-center content-center opacity-100 bg-slate-50  px-12 py-10  border-t-8 border-blue-500  rounded-md fixed top-10">
            <h3 className=" capitalize text-gray-600 text-2xl font-mono text-center block">
              new account
            </h3>
            {loading === false ? (
              <form onSubmit={formikEditProfile.handleSubmit}>
                <div className="flex flex-col items-start  mt-4">
                  <label
                    htmlFor="email"
                    className="text-gray-500  lowercase mb-2 first-letter:capitalize"
                  >
                    email :
                  </label>
                  <input
                    className="bg-white  lowercase p-2 w-96 opacity-100 border-1 border-gray-300 rounded-md text-gray-500 text-sm "
                    type="text"
                    name="email"
                    onChange={formikEditProfile.handleChange}
                    value={formikEditProfile.values.email}
                  />
                  {formikEditProfile.errors.email &&
                  formikEditProfile.touched.email ? (
                    <div className="alert alert-danger">
                      {formikEditProfile.errors.email}
                    </div>
                  ) : (
                    ""
                  )}
                </div>

                <div className="flex flex-col items-start  mt-4">
                  <label
                    htmlFor="password"
                    className="text-gray-500  lowercase mb-2 first-letter:capitalize"
                  >
                    password :
                  </label>
                  <input
                    className="bg-white  p-2 w-96 opacity-100 border-1 border-gray-300 rounded-md text-gray-500 text-sm capitalize"
                    type="text"
                    name="password"
                    onChange={formikEditProfile.handleChange}
                    value={formikEditProfile.values.password}
                  />
                  {formikEditProfile.errors.password &&
                  formikEditProfile.touched.password ? (
                    <div className="alert alert-danger">
                      {formikEditProfile.errors.password}
                    </div>
                  ) : (
                    ""
                  )}
                </div>

                <div className="flex flex-row  justify-around content-center mt-3">
                  <button
                    disabled={!formikEditProfile.dirty}
                    type="submit"
                    className="btn btn-primary w-44 text-2xl "
                  >
                    save
                  </button>
                  <button
                    onClick={() => togglePopEdit()}
                    className="w-8 shadow-md   m-2 h-8 bg-red-400 transition duration-200 hover:bg-red-600 text-white  rounded-md  absolute top-0 right-0"
                  >
                    <i className="fa fa-close"></i>
                  </button>
                </div>
              </form>
            ) : (
              <div className=" mt-24 text-center text-2xl text-gray-600">
                Loading...
              </div>
            )}
          </div>

          {/* -------------------------------------------- */}
          {/* </div> */}
        </div>
      )}
      <div className="bg-white  mt-14 p-6 rounded-md text-center flex content-center justify-center  items-center flex-col">
        <div className="h-32 w-32 md:w-48 md:h-48 lg:w-64 lg:h-64 rounded-full capitalize bg-blue-400 flex items-center justify-center text-white border-1 border-slate-200 md:border text-3xl md:text-4xl lg:text-5xl mb-5">
          {nameDoctor && nameDoctor.name.substring(0, 1)}
        </div>
        <div className="mt-3 md:mt-5 text-gray-500 rounded-full font-bold font-mono relative text-xl md:text-2xl">
          {nameDoctor.name}
          <sub className="text-green-600 bg-white rounded-full shadow-md px-1 py-1 absolute md:px-2 md:py-2">
            <i className="fa-solid fa-check"></i>
          </sub>
        </div>

        <form>
          <div className="mt-3 text-gray-500 rounded-full flex flex-col font-bold font-mono text-sm sm:flex-row sm:space-x-2">
            <div className="card-input w-full sm:w-96">
              <label htmlFor="fname" className="mb-1 float-left">
                First Name
              </label>
              <input
                className="p-2 rounded-md border-1 w-full border-gray-200"
                type="text"
                name="fname"
                id="fname"
                placeholder="First Name"
                value={nameDoctor.name}
                disabled
              />
            </div>
            <div className="card-input w-full sm:w-96">
              <label htmlFor="lname" className="mb-1 float-left">
                phone
              </label>
              <input
                className="p-2 rounded-md border-1 w-full border-gray-200"
                type="text"
                name="fname"
                id="fname"
                placeholder="Last Name"
                value={nameDoctor.phone}
                disabled
              />
            </div>
          </div>
          <div className="mt-3 text-gray-500 rounded-full flex flex-col font-bold font-mono text-sm sm:flex-row sm:space-x-2">
            <div className="card-input w-full sm:w-96">
              <label htmlFor="fname" className="mb-1 float-left">
                Joined
              </label>
              <input
                className="p-2 rounded-md border-1 w-full border-gray-200"
                type="text"
                name="fname"
                id="fname"
                placeholder="User Name"
                value={moment(nameDoctor.createdAt).format("MMMM DD, YYYY")}
                disabled
              />
            </div>
            <div className="card-input w-full sm:w-96">
              <label htmlFor="lname" className="mb-1 float-left">
                Email
              </label>
              <input
                className="p-2 rounded-md border-1 w-full border-gray-200"
                type="email"
                name="fname"
                id="fname"
                placeholder="Email"
                value={nameDoctor.email}
                disabled
              />
            </div>
          </div>

          <div className="mt-3 text-gray-500 rounded-full flex flex-col font-bold font-mono text-sm">
            <div className="card-input w-full">
              <label htmlFor="fname" className="mb-1 float-left">
                Password
              </label>
              <input
                className="p-2 rounded-md border-1 w-full border-gray-200"
                type="password"
                name="fname"
                id="fname"
                placeholder="Password"
                value="test1234"
                disabled
              />
            </div>
          </div>
        </form>

        <span className="w-96 p-0.5  bg-gray-100  rounded-full my-5 "></span>
        <div className="button-edite ">
          <button
            onClick={() => togglePopEdit()}
            className="w-44 bg-blue-600 text-white font-mono font-bold rounded-md p-2 cursor-pointer hover:bg-blue-800 transition duration-300 ease-in-out shadow-md mt-10"
          >
            Edite Profile
          </button>
        </div>
      </div>
    </>
  );
}
