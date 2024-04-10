//const heading = React.createElement("h1" , {} , "Hello From react World");

import React from "react";
import ReactDOM from "react-dom";

// const JsxHeading = () => (
//     <h1 className="head" tabIndex="5">
//         Namastey React
//     </h1>

// );

// const HeadingComponent = () => (
//     <div id = "container">
//         <JsxHeading/>
//         <h1>This is from functional component</h1>
    
//     </div>
// );

const Header = () => {
    return (
        <div className="header">
            <div>
                <img className="logo" src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?nwm=1&nws=1&industry=food&sf=&txt_keyword=All"/>
            </div>
            <div className="nav-items">
                <ul className="nav">
                    <li className="list">Home</li>
                    <li className="list">About Us</li>
                    <li className="list">Contact Us</li>
                    <li className="list">Cart</li>
                </ul>
            </div>
        </div>
    );
};

const RestaurantCard = (props) =>{
    return (
        <div className="restaurantCard">
            <img 
            className="food-image"
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_366/e0vvulfbahjxjz6k4uwi"
            />
            <h3>{props.name}</h3>
            <h4>{props.cuisine}</h4>
        </div>
    );
};

const Body = () => {
    return (
        <div className="body">
            <div className="search">
                Search
            </div>
            <div className="restCard">
            <RestaurantCard name="Meghna Foods" cuisine = "Biryani , North Indian"/>
            <RestaurantCard name="KFC"  cuisine = "Burger, Chicken"/>
            <RestaurantCard name="Dominos"  cuisine = "Coke, Pizza"/>
            </div>
        </div>
    );
};

const AppLayout = () => {
    return (
        <div className="app">
            <Header/>
            <Body/>
        </div>
    );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);


  