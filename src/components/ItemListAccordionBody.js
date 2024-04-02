export const ItemListAccordionBody = ({ items, show }) => {
  const CDN =
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/";

  return (
    <div >
      {items.map((item) => (
        <div
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

          <div className="w-3/12">
            <div className="absolute">
              <button className="px-2 my-4 bg-green-700  h-10 w-22 rounded-lg shadow-lg font-bold text-white hover:bg-green-900 transition-transform duration-100 transform hover:scale-110">
                Add +
              </button>
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
