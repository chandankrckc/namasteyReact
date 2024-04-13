import RestaurantCard from "./RestaurantCard";
import { useState ,useEffect } from "react";
import Shimmer from "./shimmer";


const Body = () => {

    //Local State Variable
    const [listOfRestaurants , setListOfRestaurant] = useState([]);

    useEffect(() => {
        fetchData();
    } , []);

    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.96340&lng=77.58550&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );

        const json = await data.json();
        console.log(json);
        console.log(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
        setListOfRestaurant(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
    }

    
    //conditional rendering
    if(listOfRestaurants.length === 0)
    {
        return <Shimmer/>;
    }

    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={() => {
                    debugger;
                    console.log(listOfRestaurants);
                    const filteredList = listOfRestaurants.filter((res) => res.info.avgRating >= 4.5);
                    setListOfRestaurant(filteredList);
                }}
                >Top Rated Restaurant</button>
            </div>
            <div className="restCard">
            {listOfRestaurants.map((restaurant , index) => (
            <RestaurantCard key = {restaurant.info.id} resData = {restaurant}/>
            ))}
            </div>
        </div>
    );
};


export default Body;