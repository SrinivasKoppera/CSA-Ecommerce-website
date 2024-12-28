import { useSelector } from "react-redux";
import emptyCartImage from "../../assets/cart.webp";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeItemFromCartAction } from "../../redux/actions";

const Cart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart);

  const removeItemFromCart = (id) => {
    dispatch(removeItemFromCartAction(id));
  };

  return (
    <div className="m-6">
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
        <div>
          <h1 className="text-2xl font-bold"> Your Cart Items</h1>

          <div className="flex flex-wrap">
            {cartItems?.map((eachItem) => {
              return (
                <div className="border w-1/4 rounded m-2 p-2" key={eachItem.id}>
                  <div className="flex justify-between items-center">
                    <img
                      src={eachItem.image}
                      alt={eachItem.title}
                      className="w-24"
                    />
                    <div>
                      <p>Title : {eachItem.title}</p>
                      <p>Price : {eachItem.price}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <button
                      className="bg-slate-900 text-white p-2 rounded mx-auto"
                      onClick={() => removeItemFromCart(eachItem.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
