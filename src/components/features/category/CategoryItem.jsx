import mens from "./../../../assets/img/mens.jpg";
import womens from "./../../../assets/img/womens.jpg";
import jewellery from "./../../../assets/img/jewellery.jpg";
import electronic from "./../../../assets/img/electronic-1.jpg";
import { Link } from "react-router-dom";
const imgSrc = [electronic, jewellery, mens, womens];
const url = ["electronic", "jewellery", "mens-clothing", "womens-clothing"];
function CategoryItem({ item, index }) {
  return (
    <li className="h-72 w-[100%] relative sm:w-[45%] md:w-[35%] group rounded-lg">
      <Link to={`${url[index]}`}>
        <img
          src={imgSrc[index]}
          alt={index}
          className="object-cover w-[100%] h-[100%]"
        />
        <p className="absolute bottom-0 inset-x-0 bg-opacity-50 bg-neutral-800 text-center py-2 text-stone-50 font-sans capitalize font-semibold tracking-wider  sm:group-hover:py-[130px] transition-all duration-300 sm:group-hover:text-xl">
          {item === "jewellery" ? "jewellery" : item}
        </p>
      </Link>
    </li>
  );
}

export default CategoryItem;
