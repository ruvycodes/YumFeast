import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import RestaurantSearch from "./RestaurantSearch";
import { Link } from "react-router-dom";
import useFetchRestaurant from "../utils/useFetchRestaurant";

const Body = () => {

  const { resList, fliteredResList } = useFetchRestaurant();  //destructring


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

      <div className="cards-display-container flex flex-wrap bg-[#FFD1D1] h-[1150px]">
        {fliteredResList.map((restaurant) => (

          <Link className='router-link' to={"/restaurant/" + restaurant.info.id} key={restaurant.info.id}><RestaurantCard resInfo={restaurant} /></Link>

        ))}
      </div>
    </div>
  );
};

export default Body;
