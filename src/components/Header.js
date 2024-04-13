import { LOGO_URL } from "../../utils/constant";
import { useState } from "react";

const Header = () => {


    const [btnName, setButton] = useState("Login");
    //let btnName = "Login";
    return (
        <div className="header">
            <div>
                <img className="logo" src={LOGO_URL}/>
            </div>
            <div className="nav-items">
                <ul className="nav">
                    <li className="list">Home</li>
                    <li className="list">About Us</li>
                    <li className="list">Contact Us</li>
                    <li className="list">Cart</li>
                    <button className="login" onClick={() => {
                       btnName === "Login" 
                       ? setButton("Logout") 
                       : setButton("Login");
                    }}>{btnName}</button>
                </ul>
            </div>
        </div>
    );
};

export default Header;