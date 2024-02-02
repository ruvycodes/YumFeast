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
                  <div key={item.card.info.id}>
                    <p>
                      {item.card.info.name}: Rs {item.card.info.price / 100}
                    </p>
                  </div>
                ))
              : []
          );
        } else if (card.card?.card?.itemCards) {
          return card.card.card.itemCards.map((item) => (
            <div key={item.card.info.id}>
              <p>
                {item.card.info.name}: Rs {item.card.info.price / 100}
              </p>
            </div>
          ));
        }
        return null;
      })}
    </>
  );
};

export default RestaurantMenu;
