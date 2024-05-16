import { useParams } from "react-router-dom";
import useFetchMenu from "../utils/useFetchMenu";
import MenuAccordian from "./MenuAccordian";
import { useState } from "react";
import Notification from "./Notification";

const RestaurantMenu = () => {
  const { resid } = useParams();
  const resMenu = useFetchMenu(resid);
  const [showIndex, setShowIndex] = useState(null)

  if (!resMenu.length) {
    return <div>Loading..</div>;
  }

  const filteredTitle = resMenu.filter((data) => { return data?.card?.card?.itemCards }); //check if title exists in a card
  console.log(filteredTitle);
  
  return (
    <>
      <h1>Ye hai humaara MENUUUU</h1>
      <Notification />

      {
        filteredTitle.map((title, index) => <MenuAccordian key={index} accordianData={title?.card?.card} />)
      }
    </>
  );
};

export default RestaurantMenu;
