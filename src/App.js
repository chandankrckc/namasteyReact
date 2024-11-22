//const heading = React.createElement("h1" , {} , "Hello From react World");

import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/about";
import ContactUs from "./components/ContactUs";
import { createBrowserRouter , RouterProvider , Outlet} from "react-router-dom";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";


const AppLayout = () => {
    return (
        <div className="app">
            <Header/>
            <Outlet/>
        </div>
    );
};

const appRouter = createBrowserRouter([
    {
        path : "/", 
        element : <AppLayout/>,
        children : [
            {
                path : "/",
                element : <Body/>
            },
            {
                path : "/about",
                element : <About/>
            },
            {
                path : "/ContactUs",
                element : <ContactUs/>
            },
            {
               
                path : "/restaurants/:resId",
                element : <RestaurantMenu/>
            }
        ],
        errorElement : <Error/>
    }
    
])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);


  