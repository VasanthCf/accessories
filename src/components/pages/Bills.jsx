import { useNavigate } from "react-router-dom";

function Bills() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col justify-center items-center space-y-10">
      <p className="bg-green-400 text-xl font-semibold p-5 rounded-md">
        {" "}
        Your order success fully placed 🤩
      </p>
      <button
        onClick={() => navigate("/")}
        className="bg-slate-800 text-slate-50 px-4 py-3"
      >
        Continue shopping
      </button>
    </div>
  );
}

export default Bills;
