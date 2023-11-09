import { useLoaderData } from "react-router-dom";
import { getJewellery } from "../../services/loaders";
import Loading from "../ui/Loading";
import ProductItem from "../features/Products/ProductItem";

function Jewellery() {
  const data = useLoaderData();

  if (!data) return <Loading />;
  return (
    <>
      <h1 className="text-4xl italics font-bold font-sans text-center">
        Jewellery
      </h1>
      <ProductItem data={data} />{" "}
    </>
  );
}

export async function loaderJewellery() {
  const res = await getJewellery();
  return res;
}
export default Jewellery;
