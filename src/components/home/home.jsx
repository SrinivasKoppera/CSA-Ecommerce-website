import React from "react";
import homeShoppingImage from "../../assets/shopping_home_image.jpeg";
import "./home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <div className="flex flex-col md:flex-row items-center w-full max-w-screen-xl px-6 py-12">
        {/* Left Side Image */}
        <div className="flex-1">
          <img
            src={homeShoppingImage}
            alt="Placeholder"
            className="w-full rounded-lg shadow-lg"
          />
        </div>

        {/* Right Side Text Container */}
        <div className="flex-1 mt-6 md:mt-0 md:ml-12 text-center md:text-left">
          <h2 className="text-3xl font-bold text-gray-800 mb-4 typing-text">
            Welcome to Our Website
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Fashion is not just about clothing, it’s about identity, expression,
            and the pulse of the moment. Each season brings a fresh wave of
            creativity, a new chapter in the ongoing story of style. Fashion has
            always mirrored the world around it, capturing the mood, values, and
            changes in society. With each new trend, a conversation is
            sparked—one that can be seen, heard, and felt. The beauty of fashion
            lies in its ability to transform the everyday into something
            extraordinary, offering a canvas for self-expression that can never
            be fully defined.
          </p>

          <Link to="/">
            <button className="px-8 py-3 bg-slate-900 text-white font-semibold rounded-lg shadow-md hover:bg-slate-600 transition-colors duration-300">
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
