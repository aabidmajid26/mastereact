import { useParams } from "react-router-dom";
import MenuItem from "./MenuItem";
import useMenuItems from "../utils/useMenuItems";


const RestaurantMenu = () => {

    const { resId } = useParams()

    const [menuItems, fullData] = useMenuItems(resId)
    return (fullData === null) ? <div>Hello</div> : (
        <div>
            <h1>
                Menu for {fullData.data.cards[0].card.card.info.name}
            </h1>
            <h3>Items: </h3>
            <ul>
                {
                    menuItems?.map((element) => (
                        <MenuItem 
                            key={element.card.info.id}
                            name={element.card.info.name}
                            price={element.card.info.price || element.card.info.defaultPrice}
                            imgUrl={element.card.info.imageId || element.card.info.cloudinaryImageId || element.card.info.id}>
                        </MenuItem>))
                }
            </ul>
        </div>
    )
}

export default RestaurantMenu;