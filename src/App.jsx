import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout/Layout";
import Login from "./components/Login/Login";
import NotFound from "./components/NotFound/NotFound";
import Jobs from "./components/Jobs/Jobs";
import ProtectedRoutes from "./components/ProtectedRoutes/ProtectedRoutes";
import Profile from "./components/Profile/Profile";
import InProgress from "./components/InProgress/InProgress";
import Finished from "./components/Finished/Finished";

function App() {
  const routes = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        {
          index: true,
          element: (
            <ProtectedRoutes>
              {" "}
              <Jobs />{" "}
            </ProtectedRoutes>
          ),
        },
        { path: "/login", element: <Login /> },
        {
          path: "/jobs",
          element: (
            <ProtectedRoutes>
              <Jobs />
            </ProtectedRoutes>
          ),
        },
        {
          path: "/in-progress",
          element: (
            <ProtectedRoutes>
              <InProgress />
            </ProtectedRoutes>
          ),
        },
        {
          path: "/finished",
          element: (
            <ProtectedRoutes>
              <Finished />
            </ProtectedRoutes>
          ),
        },
        {
          path: "/profile",
          element: (
            <ProtectedRoutes>
              <Profile />
            </ProtectedRoutes>
          ),
        },

        { path: "*", element: <NotFound /> },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={routes}></RouterProvider>
    </>
  );
}

export default App;
