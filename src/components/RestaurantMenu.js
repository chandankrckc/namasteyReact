import { useEffect, useState } from "react";
import Shimmer from "./shimmer";

const RestaurantMenu = () => {


    const [resInfo , setResInfo] = useState(null);
    const fetchMenu = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.96340&lng=77.58550&restaurantId=10575&catalog_qa=undefined&isMenuUx4=true&submitAction=ENTER"
        );
        const json = await data.json();
        console.log(json);
        setResInfo(json.data);
    }
        
    useEffect(() => {
        fetchMenu();
    } ,[]);

    if(resInfo === null){
        return <Shimmer/>;
    }
       
    return resInfo === null ?(
    <Shimmer/>
    ):(
        <div className="menu">
            <h2>Menu</h2>
            <ul>
                <li>Burger</li>
                <li>Pizza</li>
                <li>Coke</li>
            </ul>
        </div>
    );
};

export default RestaurantMenu;