import { useDispatch, useSelector } from "react-redux"
import { displayNotification } from "../utils/slice/cartSlice";

const Notification = () => {

    let checkNotificationTrue = useSelector((store) => { return store.cart.showNotification })
    const dispatch = useDispatch()
    //set the value back to false after some time so the message fades away
    if (checkNotificationTrue) {
        setTimeout(() => {
            dispatch(displayNotification(false))
        }, 500)
    }

    return (
        <>
            <div className={`notification sticky top-10 z-10 text-center text-gray-600 ${checkNotificationTrue ? "" : "hidden"}`}>
                <span className="text-xl font-semibold " >Item added to cart</span>
            </div>
        </>
    )
}

export default Notification