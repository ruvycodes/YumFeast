import { useParams } from "react-router-dom";
import useFetchMenu from "../utils/useFetchMenu";
import MenuAccordian from "./MenuAccordian";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resid } = useParams();
  const resMenu = useFetchMenu(resid);
  const [showIndex, setShowIndex] = useState(null)

  if (!resMenu.length) {
    return <div>Loading..</div>;
  }

  const filteredTitle = resMenu.filter((data) => { return data?.card?.card?.itemCards }); //check if title exists in a card
  console.log(filteredTitle);

  // console.log(filteredTitle);

  return (
    <>
      <h1>Ye hai humaara MENUUUU</h1>

      {/* {resMenu.map((dish)=> (
                 <p key={dish?.card?.info?.id}>{(dish?.card?.info?.name)}</p>
            ))} */}

      {/* {resMenu.map((card) => {
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
      })} */}

      {
        filteredTitle.map((title, index) => <MenuAccordian accordianData={title?.card?.card} />)
      }
    </>
  );
};

export default RestaurantMenu;
