import { useDispatch } from "react-redux";
import { CLOUDINARY_URL } from "../utils/constants";
import { addItem } from "../utils/slice/cartSlice";


const ItemList = ({ item }) => {

    const dispatch = useDispatch();
    const handleAddItem = () => {
      dispatch(addItem(item))
    }

    return (

        <div key={item.card.info.id} className=" flex items-center flex-wrap justify-between border-b border-gray-200">
            <div>
                <h5 className=" py-1 px-2 ml-1 mt-1 font-semibold">{item.card.info.name}</h5>
                <span className=" py-1 px-2 ml-1 text-gray-400">Rs {item.card.info.price / 100 || item.card.info.defaultPrice / 100}</span>
            </div>
            <div className="relative">
                <button className="absolute top-8 left-0 bg-gray-800 text-white px-1 rounded-sm" onClick={handleAddItem}>Add</button>
                <img className="w-28 h-[90px] rounded-md mt-10 shadow-md" src={CLOUDINARY_URL + item.card.info.imageId} alt="" />
            </div>
            <div className="w-10/12">
                <p className=" py-1 px-2 ml-1 mr-2 mb-6 text-sm text-gray-400">{item.card.info.description}</p>
            </div>
        </div>
    )

}

export default ItemList;