import { useDispatch, useSelector } from "react-redux"
import { clearCart } from "../utils/slice/cartSlice"
import CartItems from "./CartItems"
const Cart = () => {

    const addedItems = useSelector((store) => store.cart.items)
    const dispatch = useDispatch()
    console.log(addedItems);
    const handleClearCart = () => {
        dispatch(clearCart(addedItems))
    }

    return (

        <>

            {addedItems.length == 0 ?
                <div className="flex justify-center flex-col items-center">
                    <h1 className="text-4xl text-center my-14">Your 🛒 is empty</h1>
                    <img className="w-3/12" src="https://media.tenor.com/oIVdO9uv1lUAAAAi/money-shopping.gif" alt="empty shopping cart" />
                </div> :

                <div>
                    <h1 className="text-center my-2 py-3 font-bold text-xl">Hello ye hai aapka order</h1>
                    <div className="flex justify-center mb-6">
                        <button className=" bg-black text-white p-1 rounded-md" onClick={handleClearCart}>Clear Cart</button>
                    </div>
                    <div className="w-6/12 m-auto">
                        {addedItems.map((addeditem, index) => { return <div key={index} className=" mb-4 border-b border-l border-t solid border-gray-250 "> <CartItems item={addeditem} /></div> })}
                    </div>
                </div>
            }
        </>
    )
}

export default Cart