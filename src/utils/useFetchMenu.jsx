import { MENU_API } from "../utils/constants";
import { useEffect, useState } from "react";

const useFetchMenu = (resid) => {

    const [resMenu, setResMenu] = useState([]);
    useEffect(() => { fetchMenu() }, [])

    async function fetchMenu() {

        let raw = await fetch(MENU_API + resid);
        let data = await raw.json();
        // setResMenu(data?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards || data?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.categories[0].itemCards);
        setResMenu(data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

    }

    return resMenu
}

export default useFetchMenu;