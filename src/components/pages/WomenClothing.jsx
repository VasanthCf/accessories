import { useLoaderData } from "react-router-dom";
import { getWomen } from "../../services/loaders";
import ProductItem from "../features/Products/ProductItem";

function WomenClothing() {
  const data = useLoaderData();
  return <ProductItem data={data} />;
}
export async function loaderWomen() {
  const res = await getWomen();
  return res;
}

export default WomenClothing;
