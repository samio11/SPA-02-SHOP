import { createBrowserRouter } from "react-router-dom";
import Fixed_item from "./Components/Home/Fixed_item";
import Home from "./Components/Home/Home";
import Favourite from "./Components/Favourite";
import Signin from "./Components/Signin";
import Error from "./Components/Error";
import Per_product_info from "./Per_product_info";
const main_path = createBrowserRouter([
    {
        path : '/',
        element : <Fixed_item></Fixed_item>,
        errorElement:<Error></Error>,
        children : [
            {
                path : '/',
                element : <Home></Home>,
                loader : ()=> fetch('./Data.json')
            },
            {
                path : "/favourite",
                element : <Favourite></Favourite>
            },
            {
                path : "/sign-in",
                element : <Signin></Signin>
            },
            {
                path : '/product_info/:id',
                element : <Per_product_info></Per_product_info>
            }
        ]
    }
])

export default main_path;