import { useEffect, useState } from "react";
import { ALL_RESTAURANTS_URL } from "./constants";


const useFetchAllRestaurants = (searchQuery) => {
    const [restaurants, setRestaurants] = useState([]);
    useEffect(() => {
        fetchData(searchQuery);
        if(!searchQuery){
            return
        }
        fetchData(searchQuery);
    }, [searchQuery])

    const fetchData = async (searchQuery) => {
        const response = await fetch(ALL_RESTAURANTS_URL)
        const json = await response.json()
        var cards = json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        if(!searchQuery){
            setRestaurants(cards)
            return
        }
        const filteredRestaurants = cards.filter(({info}) => info.name.toLowerCase().includes(searchQuery.toLowerCase()))
        setRestaurants(filteredRestaurants)
    }
    return restaurants;
}

export default useFetchAllRestaurants;