import { CDN_URL } from "../utils/constants";

const Restaurant = ({ resData }) => {

    const { name, locality, avgRating, costForTwo, cloudinaryImageId } = resData?.info;
    
    return (
        <div className="w-72 h-[100%] rounded-lg bg-[#404040] text-slate-200 shadow-2xl hover:shadow-[#101010] p-0 overflow-hidden">
            <img className=" w-72 h-40 rounded-t-lg pt-0" src={CDN_URL + cloudinaryImageId} 
                alt={name}/>
            <div className="p-2">

                <p className="pl-0 font-bold">{name} </p>
                <p className="pl-0">{locality}</p>
                <p className="pl-0 ">{avgRating + " out of 5"}</p>
                <p className="pl-0 font-semibold">{costForTwo}</p>
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