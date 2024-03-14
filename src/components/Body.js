import { useState } from "react";


import Restaurant, { RestaurantEnhanced } from "./Restaurant"
import { Link } from "react-router-dom";
import useFetchAllRestaurants from "../utils/useFetchAllRestaurants";

const Body = () => {
    const [searchQuery, setSearchQuery] = useState("")

    const EnhancedRestaurant = RestaurantEnhanced(Restaurant)  // higher order component
    const restaurants = useFetchAllRestaurants(searchQuery)    // custom hook
    console.log(restaurants, 'restaurants')

    return (
        <div className="h-auto bg-[#303030] p-3 text-white">
            <div className="m-7 flex justify-center h-auto">
                <input className="w-[23rem] p-3 rounded-xl font-mono hover:shadow-2xl focus:shadow-2xl" id="searchbox" type="text" onKeyUp={(e) => setSearchQuery(e.target.value)} placeholder="Search your favourite restaurants..." />
            </div>
            <hr />
            <div className="flex flex-wrap justify-center shadow-2xl mb-10 h-auto">
                {
                    restaurants.map((element) => {
                    {/* return element.info.name.includes(".") ? (<Link key={element.info.id} to={"/restaurants/" + element.info.id}><EnhancedRestaurant  resData={element} /></Link>) :  (*/} 
                            return (
                            <Link className="m-10 h-auto" key={element.info.id} to={"/restaurants/" + element.info.id}><Restaurant resData={element} /></Link> 
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Body