import { useSelector } from "react-redux";
import emptyCartImage from "../../assets/cart.webp";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart);
  console.log(cartItems);

  return (
    <div>
      {cartItems.length === 0 ? (
        <div className="flex flex-col justify-center items-center">
          <img className="w-1/4" src={emptyCartImage} alt="empty-cart" />
          <h1 className="text-2xl font-bold">Your cart is Empty</h1>
          <button
            onClick={() => navigate("/products")}
            className="bg-slate-800 text-white p-2 rounded-md mt-10"
          >
            Go to Shopping
          </button>
        </div>
      ) : (
        <div>CART UI</div>
      )}
    </div>
  );
};

export default Cart;
