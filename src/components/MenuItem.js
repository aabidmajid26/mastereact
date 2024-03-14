import { MENU_IMG_URL } from "../utils/constants"

const MenuItem = ({title, items, activeIndex, currentIndex, onclick}) => {
    // const [showDetails, setDetails] = useState(false)
    const divClassName = "bg-white text-black p-2 flex justify-between mt-2 shadow-md cursor-pointer"

    return (activeIndex !== currentIndex ) ? <div onClick={() => onclick(currentIndex, activeIndex)} className={divClassName}><h5>{title}</h5><h5>➡️</h5></div> : (
        <div className="">
            <div onClick={() => onclick(currentIndex, activeIndex)} className={divClassName}>
                <h5>{title}</h5>
                <h5>➡️</h5>
            </div>
            <div className="p-2">
                    {
                        items?.map((element) => {
                            return (
                                <div key={element.card.info.name} className=" p-6 flex justify-between m-10 shadow-lg bg-[#454545] rounded-lg">
                                    <div>
                                        <p>{element.card.info.name}</p>
                                        <p>₹ {element.card.info.price/100 || element.card.info.defaultPrice/100}</p>
                                    </div>
                                    <img className="h-20 rounded-lg " src={MENU_IMG_URL + element.card.info.imageId} />
                                </div>
                            )
                        })
                    }
            </div>
            
        </div>
  )
}

export default MenuItem