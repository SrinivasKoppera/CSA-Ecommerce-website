import { useNavigate } from "react-router-dom"; // Updated hook for v6

const NotFound = () => {
  const navigate = useNavigate(); // Use useNavigate instead of useHistory

  const goBack = () => {
    navigate("/"); // Navigate to the home page or any other route
  };

  return (
    <div className="flex justify-center items-center h-screen bg-slate-100">
      <div className="text-center max-w-md mx-auto bg-white rounded-lg shadow-lg p-12">
        <h1 className="text-3xl font-bold text-red-800 mb-4">
          Oops! Page Not Found
        </h1>
        <button
          onClick={goBack}
          className="bg-slate-900 text-white px-6 py-3 rounded-lg shadow-md hover:bg-slate-600 transition duration-300"
        >
          Go Back Home
        </button>
      </div>
    </div>
  );
};

export default NotFound;
