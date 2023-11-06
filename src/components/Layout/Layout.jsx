import {Outlet} from "react-router-dom";
export default function Layout() {
  return (
    <div className="font-mono text-gray-700 text-2xl capitalize">
       <Outlet/>
    </div>
  );
}
