import { useSelector } from "react-redux";

export default function Home() {
  const { counterJobs } = useSelector((state) => state.JobsRed);

  return (
    <div className="font-mono text-gray-700 text-2xl capitalize">
      Home {counterJobs}
    </div>
  );
}
