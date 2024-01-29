import { useState } from "react";

const RestaurantSearch = ({ resList , onSearch }) => {

    const [searched_res, setSearchedRes] = useState("");
    // console.log(resList);

    const filterRes = () => {

       let filtered_res = resList.filter((res)=> {
            return res.info.name.toLowerCase().includes(searched_res.toLowerCase())
       })

        console.log(searched_res);
        onSearch(filtered_res)

    }

    return (

        <div className="search-res-container">
            <div className="res-input-container">
                <input value={searched_res} type="text" onChange={(event) => { setSearchedRes(event.target.value) }}></input>
            </div>

            <div className="search-res-btn container">
                <button className="search-res-btn" onClick={filterRes}>Search</button>
            </div>
        </div>

    );
};

export default RestaurantSearch;