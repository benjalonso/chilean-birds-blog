import React from "react";
import { BsFillBookmarkFill } from "react-icons/bs";


const PopularCard = () => {
  return (
    <div className="bg-violet-600 h-30 w-64 mx-5 gap-6 shrink-0 snap-always rounded-lg relative group/item ">
      <img
        className="rounded-lg object-cover"
        src="https://i.pinimg.com/564x/85/aa/19/85aa19e8833ba85599f89ae9ebaf5357.jpg"
        alt="image_card"
      />
<BsFillBookmarkFill className="absolute top-2 left-56 text-green-50 text-[15px] hover:text-green-800 opacity-75 invisible group-hover/item:visible "  />
      <span className="absolute top-28 left-4 text-green-50 text-[12px] opacity-75">Scelorchilus rubecula</span>
      <p className="absolute top-32 left-4 text-green-50 opacity-75">Chucao</p>
    </div>
  );
};

export default PopularCard;