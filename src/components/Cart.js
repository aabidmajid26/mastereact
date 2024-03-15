
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import MenuItemOne, { MenuItemOneEnhanced } from "./MenuItemOne";

const Cart = () => {


    const cartItems = useSelector((store) => store.cart.items) || []
    const dispatch = useDispatch();

    const MenuItemOneHOC = MenuItemOneEnhanced(MenuItemOne)


    return (
        <div className="text-center">
            <button 
                className="bg-white text-black p-2 m-2 rounded-lg"
                onClick={() => dispatch(clearCart())}
                >           
                Clear Cart
            </button>

            {cartItems.map((element, index) => {
                return (
                    <MenuItemOneHOC
                        key={element.card.info.name + index}
                        element={element}
                        index={index}
                    />
            )
            })}
        </div>
    )
}
export default Cart;