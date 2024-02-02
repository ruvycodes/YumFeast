import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {

    const [resMenu, setResMenu] = useState([]);
    useEffect(() => { fetchMenu() }, [])
    const { resid } = useParams();

    async function fetchMenu() {

        let raw = await fetch('https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.6139391&lng=77.2090212&restaurantId=' + resid);
        let data = await raw.json();
        // setResMenu(data?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards || data?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.categories[0].itemCards);
        setResMenu(data?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

    }

    if (!resMenu.length) {
        return (

            <div>Loading..</div>
        )
    }

    return (

        <>
            <h1>Ye hai humaara MENUUUU</h1>

            {/* {resMenu.map((dish)=> (
                 <p key={dish?.card?.info?.id}>{(dish?.card?.info?.name)}</p>
            ))} */}

            {resMenu.map((card) => {
                if (card.card?.card?.categories) {
                    return card.card.card.categories.flatMap((category) =>
                        category?.itemCards
                            ? category.itemCards.map((item) => (
                                <div key={item.card.info.id}>
                                    <p>{item.card.info.name}: Rs {item.card.info.price/100}</p>
                                </div>
                            ))
                            : []
                    );
                } else if (card.card?.card?.itemCards) {
                    return card.card.card.itemCards.map((item) => (
                        <div key={item.card.info.id}>
                        <p>{item.card.info.name}: Rs {item.card.info.price/100}</p>
                    </div>
                    ));
                }
                return null;
            })}

        </>

    )

}

export default RestaurantMenu;