import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();

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

  return (
    <div>
      <img src={productData.thumbnail} alt="" />
      <p>Title : {productData.title}</p>
      <p>Price : {productData.price}</p>
      <p>Description : {productData.description}</p>
    </div>
  );
};

export default ProductDetails;
