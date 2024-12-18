import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-white">
      <div className="w-full md:w-1/2 bg-cover bg-center flex items-center justify-center">
        <img
          src="https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-83.jpg?ga=GA1.1.67970052.1727511929&semt=ais_hybrid"
          alt="sign-up"
          className="w-3/4"
        />
      </div>

      <div className="w-full md:w-1/2 flex justify-center items-center">
        <div className="border-2 border-slate-600 w-full bg-slate-300 max-w-md rounded-lg px-14 py-4">
          <h1 className="text-center font-bold text-4xl">Sign Up</h1>

          <div className="flex flex-col my-2">
            <label className="mb-1">First Name</label>
            <input
              type="text"
              className="p-2 border border-slate-400 rounded outline-none"
              placeholder="Please Enter your First Name"
            />
          </div>

          <div className="flex flex-col my-2">
            <label className="mb-1">Last Name</label>
            <input
              type="text"
              className="p-2 border rounded border-slate-400 outline-none"
              placeholder="Please Enter your Last Name"
            />
          </div>

          <div className="flex flex-col my-2">
            <label className="mb-1">Email</label>
            <input
              type="email"
              className="p-2 border rounded border-slate-400 outline-none"
              placeholder="Please Enter your Email"
            />
          </div>

          <div className="flex flex-col my-2">
            <label className="mb-1">Password</label>
            <input
              type="password"
              className="p-2 border border-slate-400 rounded outline-none"
              placeholder="Please Enter Your Password"
            />
          </div>

          <button className="bg-slate-900 text-white w-full rounded p-2">
            Sign Up
          </button>

          <p className="text-right mt-4 pb-2">
            Already have an account?{" "}
            <Link
              className="text-blue-600 underline underline-offset-2 hover:text-opacity-75"
              to="/login"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
