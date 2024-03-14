import ReactDOM from "react-dom/client"
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom"

import Header from "./components/Header"
import Body from "./components/Body"
import About from "./components/About"
import Error from './components/Error'
import Contact from './components/contact'
import RestaurantMenu from './components/RestaurantMenu'
import CartContext from "./utils/CartContext"




const root = ReactDOM.createRoot(document.getElementById("root"))

const Main = () => {
    return (
        
        <CartContext.Provider value={{dark: false}} >
            <div className="bg-[#232323] text-white">
                <Header />
                <Outlet />
                
            </div>
        </CartContext.Provider>

    )
}

appRouter = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/restaurants",
                element: <Body />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/restaurants/:resId",
                element: <RestaurantMenu />
            }
        ]
    }
    
])

root.render(<RouterProvider router={appRouter} />)