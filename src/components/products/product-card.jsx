import { Link } from "react-router-dom";

const ProductCard = (props) => {
  const { id, title, price, thumbnail } = props.data;
  return (
    <div className="p-2 border-2 w-1/4 rounded-md m-4 flex flex-col justify-center items-center cursor-pointer bg-teal-200">
      <img
        src={thumbnail}
        alt={title}
        className="border w-2/3 bg-slate-400 rounded-full"
      />
      <h2 className="font-bold text-md my-4">{title}</h2>
      <p className="font-bold my-2">Price : $ {price}</p>
      <Link to={`/products/${id}`}>
        <button className="bg-slate-800 text-white px-6 py-2 rounded">
          View
        </button>
      </Link>
    </div>
  );
};

export default ProductCard;
