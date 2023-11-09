import { useNavigate, useRouteError } from "react-router-dom";

function Error({ name = "" }) {
  const error = useRouteError();
  const navigate = useNavigate();
  return (
    <div className="flex flex-col justify-center items-center h-[90vh]">
      <div className="bg-red-400 h-32 w-80 flex justify-center items-center m-5">
        <p className="text-xl font-semibold">{error.message || name}😕</p>
      </div>
      <button
        className="bg-blue-400 px-5 py-2 rounded-md text-stone-50 active:bg-blue-600"
        onClick={() => navigate(-1)}
      >
        Try again
      </button>
    </div>
  );
}

export default Error;
