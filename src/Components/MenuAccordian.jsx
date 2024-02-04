import { useState } from "react";
import ItemList from "./ItemList";

const MenuAccordian = ({ accordianData }) => {

    const [accordianToggle, setAccordianToggle] = useState(false);
    const handleClick = () => {
        setAccordianToggle(!accordianToggle)  //to toggle it
    }
    // console.log(accordianData);
    // console.log(accordianData);
    return (
        <div className="w-6/12 m-auto  my-9 relative ">
            <div className="  flex justify-between my-2 py-2 px-2 shadow-md font-bold text-lg">
                <h1 className="mx-2">{accordianData.title}</h1>
                <button onClick={handleClick}>🔽</button>
            </div>
            {accordianToggle && <div>  {/*take a look at this feature its a way for conditonal rendering , it will only render when accordainToggle is true cuz && of two elements will be false if any one of them gets false*/}
                {accordianData.itemCards.map((item) => {
                    return (
                        <ItemList item={item} />
                    );
                })}
            </div>}
        </div>
    );
};

export default MenuAccordian;
