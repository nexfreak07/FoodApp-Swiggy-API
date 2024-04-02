import { useEffect, useState } from "react";
import { MENU_API } from "../utils/constants";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { RestaurantCategoriesAccordian } from "./RestaurantCategoriesAccordian";
export const RestaurantMenu = () => {

    const {resId} = useParams();
    const [showIndex, setShowIndex] =  useState(0);

    const [resInfo, setResInfo] = useState(null);
    useEffect(()=>{

        fetchMenu();
    }, [])

    

    const fetchMenu = async () => {
        const data = await fetch(MENU_API+resId);
        const json = await data.json();       
        setResInfo(json?.data)

        
    }

    if (!resInfo || !resInfo.cards || resInfo.cards.length === 0) {
        return <Shimmer/>
      }

    // console.log(resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2].card.card["@type"])
    // console.log(resInfo)
 
      

    const {cuisines, name} = resInfo?.cards[2]?.card?.card?.info;

    const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((item)=> item?.card?.card["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
  
    return (

     
    <div className="text-center">
      <h1 className="font-bold my-10 text-2xl">{name}</h1>
      <p className="font-bold text-lg"> {cuisines.join(", ")}</p>

        {/* Controlled Component */}
      {categories.map((category, index)=> <RestaurantCategoriesAccordian  key={category.card.card.title}  data={category.card.card} show={ index === showIndex ? true : false} setShowIndex={()=> setShowIndex(index)}/>)}
    </div>
  );
};
