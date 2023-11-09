import { Puff } from "react-loader-spinner";

function Loading() {
  return (
    <div className="h-[74vh] flex flex-col justify-center items-center font-sans">
      <Puff
        height="80"
        width="80"
        radius={1}
        color="#f97316"
        ariaLabel="router-loading"
        visible={true}
      />
    </div>
  );
}

export default Loading;
