import { CDN_URL } from "../../utils/constant";

const RestaurantCard = (props) =>{
    //const {name , cuisine , rating} = props.resData;
    console.log(props.res);
    return (
        <div className="restaurantCard">
            <img 
            className="food-image"
            src={CDN_URL + props.resData.info.cloudinaryImageId}
            />
            <h3>{props.resData.info.name}</h3>
            <h4>{props.resData.info.cuisines.join(", ")}</h4>
            <h4>Rating : {props.resData.info.avgRating}</h4>
            
        </div>
    );
};

export default RestaurantCard;