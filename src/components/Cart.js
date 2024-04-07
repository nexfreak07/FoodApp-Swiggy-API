import React from "react";
import { useSelector } from "react-redux";
import { ItemListAccordionBody} from "./ItemListAccordionBody";
import { useDispatch } from "react-redux";
import { clearItem } from "../utils/cartSlice";
const Cart = () => {
  const items = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const clearHandler = () => {
    dispatch(clearItem())
  }


  if (items.length <= 0) {
    return (
      <div className="flex justify-center items-center h-full">
        <h1 className="text-center font-bold text-xl">
          No Items in the cart, Maybe add one 😉
        </h1>
      </div>
    );
  }
  return (
    <div className="text-center my-4">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-block" onClick={clearHandler}>
        Clear Cart
      </button>
      <div className="w-6/12 mx-auto my-4 bg-gray-100 shadow-lg p-4 rounded-lg ">
        <ItemListAccordionBody items={items} cart={true}/>
      </div>
    </div>
  );
};

export default Cart;
