import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCartAction } from "../../redux/actions";
import { useSnackbar } from "notistack";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { useCart } from "../../context-api/cart-context-api";

const ProductDetails = () => {
  const { addToCart } = useCart();

  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const [productData, setProductData] = useState([]);
  const [qty, setQty] = useState(0);

  const fetchData = async () => {
    try {
      const response = await axios.get(`https://dummyjson.com/products/${id}`);
      const data = response.data;
      setProductData(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const onDecrease = () => {
    if (qty > 0) {
      setQty((prev) => prev - 1);
    } else {
      enqueueSnackbar("You can't decrease the qty less Zero!", {
        variant: "error",
        anchorOrigin: {
          vertical: "top",
          horizontal: "center",
        },
        autoHideDuration: 3000,
      });
    }
  };

  const onIncrease = () => {
    setQty((prev) => prev + 1);
  };

  const callTheAddToCartAction = (id, price, image, title) => {
    const item = { id, price, image, title, qty };

    // const existingItemIndex = cart.findIndex(
    //   (cartItem) => cartItem.id === item.id
    // );
    dispatch(addToCartAction(item));
    // if (existingItemIndex !== -1) {
    //   const updatedCart = [...cart];
    //   updatedCart[existingItemIndex].quantity += 1;
    //   dispatch(updateCartAction(updatedCart));
    // } else {
    //   item.quantity = 1;
    //   dispatch(addToCartAction(item));
    // }
    enqueueSnackbar("Item added to cart successfully!", {
      variant: "success",
      anchorOrigin: {
        vertical: "top",
        horizontal: "center",
      },
      autoHideDuration: 3000,
    });
  };

  return (
    <div className="h-screen bg-slate-300 flex items-center">
      <div className="w-1/2 flex flex-col justify-center items-center">
        <img
          src={productData.thumbnail}
          alt={productData.title}
          className="border-2 border-white rounded-full"
        />
        <div className="">
          <button className="bg-pink-800 text-white p-2 rounded m-10">
            Buy Now
          </button>
        </div>
      </div>
      <div className="w-1/2">
        <p className="font-bold text-2xl my-2">Title : {productData.title}</p>
        <p className="font-bold text-2xl my-6">Price : {productData.price}</p>
        <p className="text-center">Description : {productData.description}</p>
        <div className="flex justify-around items-center border border-white w-40 p-2 my-4 bg-yellow-500 rounded-md">
          <FaMinus onClick={onDecrease} />
          <span>Qty : {qty}</span>
          <FaPlus onClick={onIncrease} />
        </div>
        <button
          onClick={() =>
            callTheAddToCartAction(
              productData.id,
              productData.price,
              productData.thumbnail,
              productData.title
            )
          }
          className="bg-slate-800 text-white p-2 rounded m-2"
        >
          Add to Cart
        </button>
        <button
          onClick={() => addToCart(productData)}
          className="bg-slate-800 text-white p-2 rounded m-2"
        >
          Add to Cart Context
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
