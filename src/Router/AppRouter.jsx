import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import About from "../Components/About";
import Contact from "../Components/Contact";
import Error from "../Components/Error";
import Body from "../Components/Body";
import RestaurantMenu from "../Components/RestaurantMenu";
import Cart from "../Components/Cart";

const AppRouter = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        errorElement: <Error/>,
        children: [

            {
                path: "/",
                element: <Body/>
            },
            
            {
                path: "/about",
                element: <About/>
            },
        
            {
                path: "/contact",
                element: <Contact/>
            },

            {
                path: "/restaurant/:resid",
                element: <RestaurantMenu/>
            },

            {
                path: "/cart",
                element: <Cart/>
            }
        ]
    }

])

export default AppRouter;