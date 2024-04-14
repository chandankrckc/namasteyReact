//const heading = React.createElement("h1" , {} , "Hello From react World");

import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/about";
import ContactUs from "./components/ContactUs";
import { createBrowserRouter , RouterProvider} from "react-router-dom";
import Error from "./components/Error";


const AppLayout = () => {
    return (
        <div className="app">
            <Header/>
            <Body/>
        </div>
    );
};

const appRouter = createBrowserRouter([
    {
        path : "/",
        element : <AppLayout/>,
        errorElement : <Error/>
    },
    {
        path : "/about",
        element : <About/>
    },
    {
        path : "/ContactUs",
        element : <ContactUs/>
    }
])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);


  