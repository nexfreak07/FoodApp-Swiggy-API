import { RestaurantCard, withPromoted } from "./RestaurantCard";
import { API, resObj } from "../utils/constants";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { useOnline } from "../hooks/useOnline";
export const Body = () => {


    const [listRestaurants, setListRestaurants] = useState([])

    const RestaurantCardPromoted = withPromoted(RestaurantCard);

    useEffect(()=>{
        fetchData();
    },[])


    const status = useOnline();

    const fetchData = async () => {
        const data = await fetch(API);
        const json = await data.json();
        setListRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }


    // Conditional Rendering

    if(!status){
        return <h1 className="flex justify-center font-bold items-center" style={{fontSize: "50px", height: "100vh"}} >Looks like you are offline 💀.....Check your connection</h1>
    }

    if(listRestaurants.length  === 0){
        return <Shimmer/>     
    }



    return (
      <div className="body">
        <div className="search">Search</div>
        <div className="flex flex-wrap flex-grow-0 ">
          {listRestaurants.map((restaurant)=> <Link  key={restaurant?.info?.id}  to={"/restaurants/"+restaurant?.info?.id}>{

            restaurant.info.aggregatedDiscountInfoV3 ? ( restaurant.info.aggregatedDiscountInfoV3.header === "50% OFF" ? <RestaurantCardPromoted restaurant={restaurant}/> : <RestaurantCard restaurant={restaurant}/>) : <RestaurantCard restaurant={restaurant}/>
          }</Link>)}
  
        </div>
      </div>
    );
  };