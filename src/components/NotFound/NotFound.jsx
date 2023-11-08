import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center font-mono justify-center min-h-screen">
      <h1 className="text-4xl font-bold mb-4  text-gray-700">
        404 - Page Not Found
      </h1>
      <p className="text-lg text-gray-500 mb-8">
        Sorry, the page you are looking for does not exist.
      </p>
      <Link
        to="/"
        className="bg-blue-500 hover:bg-blue-700 text-white shadow-md  duration-200 transition font-bold py-2 px-4 rounded"
      >
        Go back to Home
      </Link>
    </div>
  );
};

export default NotFound;
