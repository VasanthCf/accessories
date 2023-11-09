import { useNavigate } from "react-router-dom";

import { useState } from "react";

function ProductDetail({ item }) {
  const [count, setCount] = useState(1);
  const navigate = useNavigate();
  return (
    <div className="w-74 px-5 space-y-5">
      <h1 className="font-sans font-semibold italic text-4xl text-center ">
        Cart
      </h1>
      <div className="flex flex-col gap-5 sm:flex-row justify-start items-start mt-7">
        <img src={item.image} width={250} />
        <div className="space-y-5">
          <p>
            {" "}
            <span className="font-semibold text-lg"> ProductName : </span>
            {item.title}
          </p>

          <p>
            {" "}
            <span className="font-semibold text-lg"> Rating: </span>
            {item.rating.rate}⭐
          </p>
          <p>
            {" "}
            <span className="font-semibold text-lg"> Price: </span>
            {item.price} $
          </p>
          <p>
            <span className="font-semibold text-lg"> Stock left: </span>
            {item.rating.count}
          </p>
          <p>
            <span className="font-semibold text-lg"> Item count: </span>
            <div className="inline-block space-x-3 border-2 border-slate-800 rounded-sm text-center">
              <button
                className="font-semibold bg-slate-800 px-3 text-lg  active:bg-slate-600 text-slate-50"
                onClick={() => setCount((prev) => (prev < 1 ? 0 : prev - 1))}
              >
                -
              </button>
              <span>{count}</span>
              <button
                className="font-semibold bg-slate-800 px-3 text-lg  active:bg-slate-600 text-slate-50"
                onClick={() => setCount((prev) => prev + 1)}
              >
                +
              </button>
            </div>
          </p>
        </div>
      </div>
      <p>
        {" "}
        <span className="font-semibold text-lg"> Description : </span>
        {item.description}
      </p>
      <div className=" flex justify-end  py-4 px-4 space-x-3">
        <p className="border-2 border-slate-700 px-6 py-4 text-xl">
          {" "}
          <span className="font-semibold ">Total price:</span>{" "}
          {item.price * count} $
        </p>
        <button
          className="bg-slate-800 px-6 py-4 text-slate-50 font-semibold text-lg active:bg-slate-600"
          onClick={() => navigate("/buy/form")}
        >
          Continue
        </button>
      </div>
    </div>
  );
}

export default ProductDetail;
