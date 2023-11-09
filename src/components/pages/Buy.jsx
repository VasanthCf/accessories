import ProductDetail from "../features/Products/ProductDetail";
import { getProduct } from "../../services/loaders";
import { useLoaderData } from "react-router-dom";
function Buy() {
  const data = useLoaderData();
  return <ProductDetail item={data} />;
}
export async function loaderProduct({ params }) {
  const res = await getProduct(params.id);
  return res;
}
export default Buy;
