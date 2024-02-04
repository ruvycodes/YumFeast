import { useParams } from "react-router-dom";
import useFetchMenu from "../utils/useFetchMenu";

const RestaurantMenu = () => {
  const { resid } = useParams();
  const resMenu = useFetchMenu(resid);

  if (!resMenu.length) {
    return <div>Loading..</div>;
  }

  return (
    <>
      <h1>Ye hai humaara MENUUUU</h1>

      {/* {resMenu.map((dish)=> (
                 <p key={dish?.card?.info?.id}>{(dish?.card?.info?.name)}</p>
            ))} */}

      {resMenu.map((card) => {
        if (card.card?.card?.categories) {
          return card.card.card.categories.flatMap((category) =>
            category?.itemCards
              ? category.itemCards.map((item) => (
                <div key={item.card.info.id} className="flex justify-center">
                  <div className="bg-amber-300 m-2 h-24 w-96 flex justify-center items-center">
                    <p>
                      {item.card.info.name}: Rs {item.card.info.price / 100}
                    </p>
                  </div>
                </div>
              ))
              : []
          );
        } else if (card.card?.card?.itemCards) {
          return card.card.card.itemCards.map((item) => (
            <div key={item.card.info.id} className="flex justify-center">
              <div className="bg-amber-100 m-2 h-24 w-96 flex justify-center items-center">
                <p>
                  {item.card.info.name}: Rs {item.card.info.price / 100}
                </p>
              </div>
            </div>
          ));
        }
        return null;
      })}
    </>
  );
};

export default RestaurantMenu;
