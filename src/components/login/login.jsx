import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="h-[90vh] flex justify-center items-center">
      <div className="flex w-full max-w-6xl">
        <div className="w-1/2 hidden md:block">
          <img
            src="https://img.freepik.com/free-vector/tablet-login-concept-illustration_114360-7863.jpg?ga=GA1.1.67970052.1727511929&semt=ais_hybrid"
            alt="Login Illustration"
            className="w-3/4 h-full object-cover"
          />
        </div>

        <div className="w-1/2 p-8 bg-white border-2 border-slate-600 rounded-lg shadow-2xl">
          <h1 className="text-center font-bold text-3xl text-gray-700 mb-6">
            Login
          </h1>
          <div className="flex flex-col my-4">
            <label className="mb-2 text-gray-600">Email</label>
            <input
              type="email"
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Please Enter your email"
            />
          </div>
          <div className="flex flex-col mb-6">
            <label className="mb-2 text-gray-600">Password</label>
            <input
              type="password"
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Please Enter Your Password"
            />
          </div>
          <button className="bg-slate-900 text-white w-full rounded-lg p-3 hover:bg-slate-700 transition duration-300">
            Login
          </button>
          <p className="text-center mt-6 text-gray-600">
            Don't have an account?{" "}
            <Link
              className="text-blue-600 font-semibold hover:text-indigo-700"
              to="/sign-up"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
