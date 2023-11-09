import { useNavigate } from "react-router-dom";

function ProductItem({ data }) {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col justify-evenly items-center  sm:flex-row sm:gap-8 flex-wrap mt-8 h-auto gap-4 ">
      {data.map((item) => (
        <div
          key={item.id}
          className="w-[100%] sm:w-[45%] min-h-80 flex justify-start items-start gap-3 bg-slate-300 px-4 py-6 rounded-lg"
        >
          <div className="w-56 h-54 ">
            <img
              src={item.image}
              className="object-stretch w-[100%] h-[100%] "
            />
          </div>
          <div>
            <h1 className="text-lg font-sans font-semibold">{item.title}</h1>
            <p className="mt-3 text-lg">
              <span className="text-lg font-semibold">price: </span>
              {item.price + " $"}
            </p>
            <p className="pr-3 mt-3">
              <span className="text-lg font-semibold"> description: </span>
              {item.description}
            </p>
            <p className="pr-3 mt-3 text-lg  space-x-6">
              <span className="text-lg font-semibold"> rating: </span>
              {item.rating.rate}⭐
              <span className="bg-green-400 px-3 py-1 rounded-full text-sm">
                {" "}
                {item.rating.count} Stocks-left
              </span>
              <button
                className="px-4 py-1 bg-blue-700 rounded-lg text-stone-50 text-sm active:bg-blue-500"
                onClick={() => navigate(`/product/${item.id}`)}
              >
                Buy
              </button>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductItem;
