import { getCategory } from "../../services/loaders";
import Categories from "../features/category/Categories";
function Home() {
  return <Categories />;
}

export async function loaderCategory() {
  const res = await getCategory();

  return res;
}

export default Home;
