import { useState } from "react";


import Restaurant, { RestaurantEnhanced } from "./Restaurant"
import { Link } from "react-router-dom";
import useFetchAllRestaurants from "../utils/useFetchAllRestaurants";

const Body = () => {
    const [searchQuery, setSearchQuery] = useState("")

    const EnhancedRestaurant = RestaurantEnhanced(Restaurant)  // higher order component
    const restaurants = useFetchAllRestaurants(searchQuery)    // custom hook

    return (
        <div className="body">
            <div className="searchbox">
                <input className="searchinput" id="searchbox" type="text" onKeyUp={(e) => setSearchQuery(e.target.value)} placeholder="Search your favourite restaurants..." />
            </div>
            <div className="restaurants">
                {
                    restaurants.map((element) => {
                        return element.info.name.includes(".") ? (<Link key={element.info.id} to={"/restaurants/" + element.info.id}><EnhancedRestaurant  resData={element} /></Link>) :  (
                            <Link key={element.info.id} to={"/restaurants/" + element.info.id}><Restaurant resData={element} /></Link> 
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Body