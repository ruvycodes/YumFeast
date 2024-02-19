import { useSelector } from "react-redux"
import ItemList from "./ItemList"
const Cart = () => {

    const addedItems = useSelector((store) => store.cart.items)
    console.log(addedItems);

    return (

        <>
            <h1 className="text-center my-4 py-4 font-bold text-xl">Hello ye hai aapka order</h1>
            <div className="w-6/12 m-auto">
                {addedItems.map((addeditem) => { return <div className=" mb-4 border-b border-l border-t solid border-gray-250 "> <ItemList item={addeditem} /></div> })}
            </div>
        </>
    )
}

export default Cart