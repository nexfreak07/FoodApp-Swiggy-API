import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../utils/cartSlice";
import { v4 as uuidv4 } from 'uuid';

export const ItemListAccordionBody = ({ items, cart }) => {
  const CDN =
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/";

    const dispatch  = useDispatch()
    const handleAdd = (item) => {
      let obj = {...item, id:uuidv4()}
      dispatch(addItem(obj))
    }

    const remove = (item) => {
      dispatch(removeItem(item))
    }

  return (
    <div >
      {items.map((item) => (
        <div
          data-testid="items"
          key={item.card.info.id}
          className="p-2 m-2 border-b-4 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span className="font-bold">{item.card.info.name}</span>
              <span>
                - ₹
                {item.card.info.price / 100 ||
                  item.card.info.defaultPrice / 100}
              </span>
            </div>
            <p className="text-xs mr-2">{item.card.info.description}</p>
          </div>

          <div className="w-3/12 ">
            <div className="absolute">
              <button data-testid="cart-test" onClick={()=>handleAdd(item)} className="px-2 my-4 bg-green-700  h-10 w-22 rounded-lg shadow-lg font-bold text-white hover:bg-green-900 transition-transform duration-100 transform hover:scale-110">
                Add +
              </button>
            {cart && <button onClick={()=>remove(item)} className="px-2 my-4 bg-red-700  h-10 w-22 rounded-lg shadow-lg font-bold text-white hover:bg-red-900 transition-transform duration-100 transform hover:scale-110">
                Remove -
              </button>}
              
            </div>

            <img
              className="w-full  rounded-lg shadow-lg"
              src={CDN + item.card.info.imageId}
            />
          </div>
        </div>
      ))}
    </div>
  );
};



