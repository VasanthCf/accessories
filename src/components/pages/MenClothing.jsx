import { useLoaderData } from "react-router-dom";
import { getMen } from "../../services/loaders";
import ProductItem from "../features/Products/ProductItem";

function MenClothing() {
  const data = useLoaderData();
  return <ProductItem data={data} />;
}
export async function loaderMen() {
  const res = await getMen();
  return res;
}
export default MenClothing;
