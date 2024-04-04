import { CART_URL } from "../utils/constants";
import Skeleton from 'react-loading-skeleton'

export const RestaurantCard = ({restaurant}) => {
  
    const {name, cuisines, avgRating, costForTwo, cloudinaryImageId, sla} = restaurant?.info;
    return (
      <div className="m-4 p-4 w-[280px] h-[480px] bg-gray-200 rounded-lg hover:bg-gray-900 hover:text-white  transition-transform duration-300 transform-gpu hover:scale-110" >
        <img
          src={CART_URL + cloudinaryImageId}
          alt="restaurant"
          className="w-[100%] h-[200px] rounded-lg"
          fallback={<Skeleton width={280} height={460} />}
        />
        <h1 className="font-bold py-4 text-lg">{name}</h1>
        <h3>{cuisines.join(", ")}</h3>
        <h3>{avgRating}</h3>
        <h3>{costForTwo}</h3>
        <h3>{sla?.slaString}</h3>
      </div>
    );
  };


  // HOC 

export const withPromoted = (RestaurantCard) => {

  // Returning a Component - > A Function
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white m-2 z-20 p-2 rounded-lg ">50% OFF</label>
        <RestaurantCard {...props}/>
      </div>
    )
  } 
}