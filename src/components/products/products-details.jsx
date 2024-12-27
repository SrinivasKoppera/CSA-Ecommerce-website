import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCartAction } from "../../redux/actions";

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const [productData, setProductData] = useState([]);

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

  const callTheAddToCartAction = (id, price, image, title) => {
    const item = { id, price, image, title };
    dispatch(addToCartAction(item));
    
  };

  return (
    <div className="bg-slate-300 flex items-center">
      <div className="w-1/2 flex flex-col justify-center items-center">
        <img src={productData.thumbnail} alt={productData.title} className="" />
        <div className="">
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
          <button className="bg-pink-800 text-white p-2 rounded m-2">
            Buy Now
          </button>
        </div>
      </div>
      <div className="w-1/2">
        <p className="font-bold text-2xl">Title : {productData.title}</p>
        <p className="font-bold text-2xl">Price : {productData.price}</p>
        <p className="text-center">Description : {productData.description}</p>
      </div>
    </div>
  );
};

export default ProductDetails;
