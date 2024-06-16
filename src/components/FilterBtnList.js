import React from "react";
import { Link, useSearchParams } from "react-router-dom";
// import { MdExplore } from "react-icons/md";

const FilterBtnList = () => {
  const [searchParams] = useSearchParams();
  const filter = searchParams.get("filter");
  const list = ["All", "HTML", "CSS", "Javascript", "ReactJS"];
  const mdList = [
    "NextJs",
    "Live",
    "Laptops",
    "Music",
    "Disney",
    "Namaste JS",
  ];

  const buttonList = (list, style) =>
    list.map((btn, i) => (
      <Link key={i} to={"/?filter=" + btn}>
        <button
          className={`${
            filter === btn ? "bg-gray-800 text-gray-50" : "bg-gray-100"
          } ${style} `}
        >
          {btn}
        </button>
      </Link>
    ));

  const style = "px-5 py-3 m-2 rounded-lg";
  const mdStyle = "px-5 py-3 m-2 rounded-lg hidden md:block";

  return (
    <div>
      <div className="flex items-center border-b-2 md:border-none md:justify-center">
        <span className="border-r-2 border-gray-200 h-6 "></span>
        {buttonList(list, style)}
        {buttonList(mdList, mdStyle)}
      </div>
    </div>
  );
};

export default FilterBtnList;