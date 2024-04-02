import React , { useState } from "react";
import { ItemListAccordionBody } from "./ItemListAccordionBody";

export const RestaurantCategoriesAccordian = ({ data, setShowIndex , show}) => {
  const { itemCards } = data;

  const handleClick = () => {
    setShowIndex()
  }

  return (
    <div>
      <div className="w-6/12 mx-auto my-4 bg-gray-100 shadow-lg p-4 rounded-lg" >
       <div className="flex justify-between  hover:bg-gray-200 rounded-lg p-4 cursor-pointer" onClick={handleClick}>
       <span className="font-bold text-lg">
          {data.title} ({itemCards.length})
        </span>
        <span>⬇</span>
       </div>

       {show && <ItemListAccordionBody items={itemCards}/>}
      </div>
    </div>
  );
};
