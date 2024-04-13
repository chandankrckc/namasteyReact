import RestaurantCard from "./RestaurantCard";
import { useState ,useEffect } from "react";
import Shimmer from "./shimmer";


const Body = () => {

    //Local State Variable
    const [listOfRestaurants , setListOfRestaurant] = useState([]);
    const [filteredRestaurant , setFilteredRestaurant] = useState([]);
    
    const [searchText , setSearchText] = useState("");

    //Whenever a state variable changes , react re renders the  component

    useEffect(() => {
        fetchData();
    } , []);

    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.96340&lng=77.58550&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );

        const json = await data.json();
        
        setListOfRestaurant(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
        setFilteredRestaurant(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
    }

    
    //conditional rendering
    if(listOfRestaurants.length === 0)
    {
        return <Shimmer/>;
    }

    return (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input  type="text" className="search-box" value = {searchText} onChange={(e)=> {
                        setSearchText(e.target.value);
                    }}/>
                    <button className="search-button" onClick={() =>{
                        //Filter the restaurant cards and update the UI
                        // search text
                        const filteredRestaurants=listOfRestaurants.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                        setFilteredRestaurant(filteredRestaurants);

                    }}>Search</button>
                </div>
                <button className="filter-btn" onClick={() => {
                    //console.log(listOfRestaurants);
                    const filteredList = listOfRestaurants.filter((res) => res.info.avgRating >= 4.5);
                    setListOfRestaurant(filteredList);
                }}
                >Top Rated Restaurant</button>
            </div>
            <div className="restCard">
            {filteredRestaurant.map((restaurant) => (
            <RestaurantCard key = {restaurant.info.id} resData = {restaurant}/>
            ))}
            </div>
        </div>
    );
};


export default Body;