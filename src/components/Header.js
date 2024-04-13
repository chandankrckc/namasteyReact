import { LOGO_URL } from "../../utils/constant";

const Header = () => {
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
                </ul>
            </div>
        </div>
    );
};

export default Header;