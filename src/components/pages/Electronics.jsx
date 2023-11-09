import { useLoaderData } from "react-router-dom";
import { getElectronic } from "../../services/loaders";
import ProductItem from "../features/Products/ProductItem";

function Electronics() {
  const data = useLoaderData();
  return <ProductItem data={data} />;
}
export async function loaderElectronic() {
  const res = await getElectronic();
  return res;
}

export default Electronics;
