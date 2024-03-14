import { useState, useEffect } from 'react';

import { MENU_URL } from "./constants";

const useMenuItems = (resId) => {
    const [menuItems, setMenuItems] = useState([]);
    const [fullData, setFullData] = useState(null);

    useEffect(()=>{
        fetchMenu();

    }, [])

    const fetchMenu = async () => {
        const response = await fetch(MENU_URL + resId)
        const json = await response.json()
        const data = json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((element)=>element?.card?.card?.["@type"]?.includes("ItemCategory"))
        if(data)
            setMenuItems(data)
        setFullData(json)
        
    }

    return [menuItems, fullData]
}

export default useMenuItems;