import { useDispatch } from "react-redux";
import { CLOUDINARY_URL } from "../utils/constants";
import { addItem, decreaseCount, increaseCount, removeItem } from "../utils/slice/cartSlice";

const CartItems = ({ item }) => {

    const dispatch = useDispatch()
    const handleRemove = () => {
        dispatch(removeItem(item.card.info.id))
    }

    const handleDecrease = () => {
        dispatch(decreaseCount(item.card.info.id))

    }

    const handleIncrease = () => {
        dispatch(increaseCount(item.card.info.id))

    }

    return (

        <div key={item.card.info.id} className=" flex items-center flex-wrap justify-between border-b border-gray-200">
            <div>
                {/*in the span inside the h5 below check if the quantity is greater than zero to avoid negative and if the quantity becomes equal to zero then dont pass referenece but call handleRemove immediatley*/}
                <h5 className=" py-1 px-2 ml-1 mt-1 font-semibold">{item.card.info.name} <span className="font-light">{item.count > 0 ? "x" + item.count : handleRemove()}</span></h5>
                <span className=" py-1 px-2 ml-1 text-gray-400">Rs {item.card.info.price / 100 || item.card.info.defaultPrice / 100}</span>
            </div>
            <div className="relative">
                <img className="w-28 h-[90px] rounded-md mt-10 shadow-md" src={CLOUDINARY_URL + item.card.info.imageId} alt="" />
                <div>
                    <button className="ml-4 text-xl mt-1 text-gray-500" onClick={handleDecrease}>-</button>
                    <button className="ml-1 px-2 text-xs mt-1 text-gray-400" onClick={handleRemove}>Remove</button>
                    <button className=" text-sm mt-1 text-gray-500" onClick={handleIncrease}>+</button>

                </div>
            </div>
            <div className="w-10/12">
                <p className=" py-1 px-2 ml-1 mr-2 mb-6 text-sm text-gray-400">{item.card.info.description}</p>
            </div>
        </div>
    )
}

export default CartItems