import RestaurantCard, { offerLabel } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import RestaurantSearch from "./RestaurantSearch";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useFetchRestaurant from "../utils/useFetchRestaurant";

const Body = () => {

  const [fliteredResList, setFilteredResList] = useState([]);
  const resList = useFetchRestaurant();

  useEffect(() => { setFilteredResList(resList) }, [resList])
  const RestaurantCardWithOffer = offerLabel(); // call high order component to get card with offer

  //filter cards on search this will optimize the code as defining it inisde onchange event will mean it will behave as an anonymous func , meaning that memory will be allocated and once the function is done it will be deallocated , its wastage of time by doing it over and over again
  const handleSearch = (filtered_res) => {
    setFilteredResList(filtered_res)
  }

  //condition for shimmer
  if (!resList.length) {
    return (

      <div className="cards-display-container flex flex-wrap">

        {Array.from({ length: 20 }, (_, index) => <Shimmer key={index} />)} {/*check about this from method , its impt */}

      </div>
    )

  }

  return (
    <div className="body-container">
      <RestaurantSearch resList={resList} onSearch={handleSearch} />

      <div className="cards-display-container flex flex-wrap bg-[#FFD1D1] h-[1150px]">
        {fliteredResList.map((restaurant) => (
          // check if selected restaurant as offer available or not , if yes then render it with the higher order component that will return the card containing offer
          <Link className='router-link' to={"/restaurant/" + restaurant.info.id} key={restaurant.info.id}>{restaurant.info.aggregatedDiscountInfoV3 ? <RestaurantCardWithOffer resInfo={restaurant} /> : <RestaurantCard resInfo={restaurant} />}</Link>

        ))}
      </div>
    </div>
  );
};

export default Body;
