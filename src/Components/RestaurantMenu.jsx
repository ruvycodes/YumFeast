import { useEffect, useState } from "react";

const RestaurantMenu = ()=> {
    
    const [resMenu , setResMenu] = useState([]);
    useEffect(()=> {fetchMenu()} , [])


    async function fetchMenu() {

        let raw = await fetch('https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.6139391&lng=77.2090212&restaurantId=26719&catalog_qa=undefined&submitAction=ENTER');
        let data = await raw.json();
        setResMenu(data?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card?.itemCards);
        console.log(data?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card?.itemCards[0]?.card?.info?.name);

    }
    

    return(
        <>
        <h1>Ye hai humaara MENUUUU</h1>
        
            {resMenu.map((dish)=> (
                 <p key={dish?.card?.info?.id}>{dish?.card?.info?.name}</p>
            ))}
        
        </>
    )

}

export default RestaurantMenu;