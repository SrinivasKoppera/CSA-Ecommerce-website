import OfferBanner from "./banner-carousel";
import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./product-card";

const Products = () => {
  const [productsData, setProductsData] = useState([]);
  const [searchQuery, setSearchQuery] = useState(""); // Step 1: State for search query

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

  // Step 2: Filter products based on search query
  const filteredProducts = productsData.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

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

      {/* Step 3: Search input */}
      <div className="flex justify-center mb-4">
        <input
          type="text"
          placeholder="Search for products..."
          className="p-2 w-1/3 border border-gray-400 rounded"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)} // Step 4: Update search query on input change
        />
      </div>

      <div className="flex justify-center flex-wrap">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((eachProduct) => (
            <ProductCard key={eachProduct.id} data={eachProduct} />
          ))
        ) : (
          <p className="text-center text-xl text-gray-600">No products found</p>
        )}
      </div>
    </div>
  );
};

export default Products;
