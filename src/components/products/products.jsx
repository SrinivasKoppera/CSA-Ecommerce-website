import OfferBanner from "./banner-carousel";
import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./product-card";

const Products = () => {
  const [productsData, setProductsData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get("https://dummyjson.com/products");
      const data = response.data.products;
      setProductsData(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="bg-slate-300">
      <OfferBanner />
      <marquee className="bg-red-400 p-2 mx-4">
        <p className="text-white">
          ✨ 🎉 Our Sale is LIVE! Don't miss out on amazing deals—shop now
          before they're gone! 🛍️✨ ⌚
        </p>
      </marquee>
      <h1 className="font-bold text-4xl text-center m-4 text-sky-800">
        Products
      </h1>
      <div className="flex justify-center flex-wrap">
        {productsData.map((eachProduct) => {
          return <ProductCard key={eachProduct.id} data={eachProduct} />;
        })}
      </div>
    </div>
  );
};

export default Products;
