import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="text-orange-700 bg-slate-900 p-4">
      <nav className="flex justify-between items-center">
        <div className="text-white font-bold">Logo</div>
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
            CART
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Header;
