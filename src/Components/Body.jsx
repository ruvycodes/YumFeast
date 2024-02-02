import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { SWIGGY_API } from "../utils/constants";
import Shimmer from "./Shimmer";
import RestaurantSearch from "./RestaurantSearch";
import { Link } from "react-router-dom";
import RestaurantMenu from "./RestaurantMenu";

const Body = () => {

  const [resList, setResList] = useState([]);
  const [fliteredResList, setFilteredResList] = useState([]);

  useEffect(() => {

    fetchData();

  }, []);

  const fetchData = async () => {
    try {
      let raw_data = await fetch(SWIGGY_API);
      let data = await raw_data.json();
      let res_data = data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
      setResList(res_data);
      setFilteredResList(res_data);
      // console.log(data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants[0].info);
      // console.log(res_data);

    } catch (error) {
      console.error(error);
    }

  }

  //filter cards on search this will optimize the code as defining it inisde onchange event will mean it will behave as an anonymous func , meaning that memory will be allocated and once the function is done it will be deallocated , its wastage of time by doing it over and over again
  const handleSearch = (filtered_res) => {
    setFilteredResList(filtered_res)
  }


  //condition for shimmer
  if (!resList.length) {
    return (

      <div className="cards-display-container">

        {Array.from({ length: 14 }, (_, index) => <Shimmer key={index} />)} {/*check about this from method , its impt */}

      </div>
    )

  }


  return (
    <div className="body-container">
      <RestaurantSearch resList={resList} onSearch={handleSearch} />

      <div className="cards-display-container">
        {fliteredResList.map((restaurant) => (

          <Link className='router-link' to={"/restaurant/"+restaurant.info.id} key={restaurant.info.id}><RestaurantCard  resInfo={restaurant} /></Link>

        ))}
      </div>
    </div>
  );
};

export default Body;
