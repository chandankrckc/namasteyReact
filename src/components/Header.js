import { LOGO_URL } from "../../utils/constant";
import { useState } from "react";
import { Link } from "react-router-dom";

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
                    <li className="list"><Link to = "/">Home</Link></li>
                    <li className="list"><Link to = "/About">About Us</Link></li>
                    <li className="list"><Link to = "/ContactUs">Contact Us</Link></li>
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