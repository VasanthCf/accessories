import { useLoaderData } from "react-router-dom";
import CategoryItem from "./CategoryItem";

function Categories() {
  const data = useLoaderData();
  return (
    <div className="h-auto">
      <div className="text-4xl text-center font-sans italic font-bold">
        <h1>Categories</h1>
      </div>
      <ul className="flex flex-col justify-evenly gap-4 flex-wrap mt-8  md:gap-8  sm:flex-row ">
        {data.map((item, i) => (
          <CategoryItem key={i} item={item} index={i} />
        ))}
      </ul>
    </div>
  );
}

export default Categories;
