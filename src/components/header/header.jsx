import { Link } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import logo from "../../assets/logo.jpg";

const Header = () => {
  return (
    <div className="text-orange-700 bg-slate-900 p-4">
      <nav className="flex justify-between items-center">
        <div className="text-white font-bold">
          <img className="w-12 rounded-full" src={logo} alt="" />
        </div>
        <div className="w-72 flex justify-between">
          <Link to="/" className="text-white font-bold">
            HOME
          </Link>
          <Link to="/products" className="text-white font-bold">
            PRODUTS
          </Link>
          <Link to="/login" className="text-white font-bold">
            LOGIN
          </Link>
          <Link to="/cart" className="text-white font-bold">
            <div className="flex flex-col justify-center items-center">
              <FaCartShopping />
              <span className="text-sm">Cart</span>
            </div>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Header;
