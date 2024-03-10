import { CDN_URL } from "../utils/constants";

const Restaurant = ({ resData }) => {

    const { name, locality, avgRating, costForTwo, cloudinaryImageId } = resData?.info;
    
    return (
        <div className="restaurant-card">
            <img className="restaurant-image" src={CDN_URL + cloudinaryImageId} 
                alt={name}/>
            <div className="restaurant-card-details">

                <h2>{name} </h2>
                <h5>{locality}</h5>
                <h5>{avgRating + " out of 5"}</h5>
                <h5>{costForTwo}</h5>
            </div>
        </div>
    )
}

export const RestaurantEnhanced = (Restaurant) => {
    return (props) => {
        return (
            <div>
                <label>promoted</label>
                <Restaurant {...props} />
            </div>
        )
    }
}


export default Restaurant;