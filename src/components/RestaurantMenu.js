import { useParams } from "react-router-dom";
import MenuItem from "./MenuItem";
import useMenuItems from "../utils/useMenuItems";
import { useState } from "react";
import { CDN_URL } from "../utils/constants";


const RestaurantMenu = () => {

    const { resId } = useParams()
    const [activeIndex, setActiveIndex] = useState(null);

    const [menuItems, fullData] = useMenuItems(resId)
    return (fullData === null) ? <div>Hello</div> : (
        <div className="pb-20">
            <div className="w-[max] flex justify-between p-5 bg-[#454545] m-2 items-center font-bold rounded-md">
                <div>
                    <p className="text-[5rem]">
                        {fullData.data.cards[0].card.card.info.name}
                    </p>
                    <p>
                        {fullData.data.cards[0].card.card.info.locality}
                    </p>
                </div>
                <img className="w-[12rem] rounded-md" src={CDN_URL + fullData.data.cards[0].card.card.info.cloudinaryImageId}  />
            </div>
            <div className="m-2">
                <ul>
                    {
                        menuItems?.map((element, index) => (
                            <MenuItem
                                key={element.card.card.title}
                                title={element.card.card.title}
                                items={element.card.card.itemCards}
                                activeIndex={activeIndex}
                                currentIndex={index}
                                onclick={(idx, actIdx)=>setActiveIndex(idx===actIdx ? null : idx)}
                            ></MenuItem>
                        ))
                    }
                </ul>
            </div>
            
        </div>
    )
}

export default RestaurantMenu;