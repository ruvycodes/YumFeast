import { useEffect, useState } from "react";
import { SWIGGY_API } from "../utils/constants";

const useFetchRestaurant = () => {

    const [resList, setResList] = useState([]);
    // Copy of resList that will be used as reference when filtering


    useEffect(() => {

        fetchData();

    }, []);

    const fetchData = async () => {
        try {
            let raw_data = await fetch(SWIGGY_API);
            let data = await raw_data.json();
            let res_data = data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
            setResList(res_data);
            // console.log(data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants[0].info);

        } catch (error) {
            console.error(error);
        }

    }

    return (resList);  // return an object containing both resList and filteredResList 
}

export default useFetchRestaurant