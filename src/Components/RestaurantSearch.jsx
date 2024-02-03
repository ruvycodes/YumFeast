import { useState } from "react";

const RestaurantSearch = ({ resList, onSearch }) => {

    const [searched_res, setSearchedRes] = useState("");
    // console.log(resList);

    const filterRes = () => {

        let filtered_res = resList.filter((res) => {
            return res.info.name.toLowerCase().includes(searched_res.toLowerCase())
        })

        console.log(searched_res);
        onSearch(filtered_res)

    }

    return (

        <div className="search-res-container bg-[#FFF5E4] flex p-4 ">
            <div className="res-input-container py-[2px]">
                <input className="border border-black rounded-md h-8 w-56 text-center" value={searched_res} type="text" onChange={(event) => { setSearchedRes(event.target.value) }}></input>
            </div>

            <div className="">
                <button className="search-res-btn search-res-btn container mx-7 bg-green-200 w-20 text-center py-[6px] rounded-lg" onClick={filterRes}>Search</button>
            </div>
        </div>

    );
};

export default RestaurantSearch;