import { MENU_IMG_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem, removeItem } from '../utils/cartSlice';

const MenuItemOne = ({element, index}) => {

    dispatch = useDispatch()

    const handleClick = (element) => {
        dispatch(addItem(element))
    }
    
    return (
        <div key={element.card.info?.name + index} className=" p-6 flex justify-between m-10 shadow-lg bg-[#454545] rounded-lg">
            <div>
                <p>{element.card.info?.name}</p>
                <p>₹ {element.card.info.price/100 || element.card.info.defaultPrice/100}</p>
            </div>
            <div className="flex flex-col items-center">
                <img className="h-20 w-40 rounded-lg " src={MENU_IMG_URL + element.card.info.imageId} />
                <button onClick={() => handleClick(element)} className="bg-black text-white p-1 relative bottom-3">Add +</button>
            </div>
        </div>
    )
}

export const MenuItemOneEnhanced = (MenuItemOne) => {
    const handleRemove = ({element}) => {
        dispatch(removeItem())
    }
    return (props) => {
        return (
            <div className=" text-center flex justify-around m-5 items-center bg-[#808080] rounded-lg" >
                <button className="bg-white text-black p-2 m-5 h-10" onClick={() => handleRemove(props)}>Remove -</button>
                <MenuItemOne {...props } />
            </div>
        )
    }
}

export default MenuItemOne;