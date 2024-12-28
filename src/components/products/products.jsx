import OfferBanner from "./banner-carousel";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import ProductCard from "./product-card";

const Products = () => {
  const [productsData, setProductsData] = useState([]);
  const [userQuey, setUserQuery] = useState("");

  const element = useRef(null);

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

  const filteredData = productsData.filter((product) =>
    product.title.toLowerCase().includes(userQuey.toLocaleLowerCase())
  );

  console.log("This is Use Ref... Hook", element);

  return (
    <div className="bg-slate-300">
      <OfferBanner />
      <marquee className="bg-red-400 p-2 mx-4">
        <p className="text-white">
          ✨ 🎉 Our Sale is LIVE! Don't miss out on amazing deals—shop now
          before they're gone! 🛍️✨ ⌚
        </p>
      </marquee>
      <h1
        className="font-bold text-4xl text-center m-4 text-sky-800"
        ref={element}
      >
        Products
      </h1>
      <div className="text-center">
        <input
          placeholder="Search..."
          className="p-2 rounded"
          value={userQuey}
          onChange={(event) => setUserQuery(event.target.value)}
        />
      </div>
      <div className="flex justify-center flex-wrap">
        {filteredData.length > 0 ? (
          filteredData.map((eachProduct) => {
            return <ProductCard key={eachProduct.id} data={eachProduct} />;
          })
        ) : (
          <h1 className="text-2xl font-bold m-10">Not Products Found</h1>
        )}
      </div>
    </div>
  );
};

export default Products;
