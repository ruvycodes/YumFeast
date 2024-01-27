import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";

const Body = () => {

const [resList , setResList] = useState([]);

useEffect(() => {
fetchData();
}, []);

const fetchData = async () => {
  try {
    const raw_data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6139391&lng=77.2090212&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const data = await raw_data.json();
    setResList(data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
    console.log(data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants[0].info);
    // console.log(data);
    
  } catch (error) {
    console.error(error);
  }
  
}


return (
    <div className="body-container">
      <div className="btn">
        <button>Search</button>
      </div>

      <div className="cards-display-container">
        {resList.map((restaurant)=> (

          <RestaurantCard key={restaurant.info.id} resInfo={restaurant}/>

        ))}
   

      </div>
    </div>
  );
};

export default Body;
