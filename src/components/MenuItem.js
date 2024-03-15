import MenuItemOne from "./MenuItemOne"

const MenuItem = ({title, items, activeIndex, currentIndex, onclick}) => {
    const divClassName = "bg-white text-black p-2 flex justify-between mt-2 shadow-md cursor-pointer"
    
    return (activeIndex !== currentIndex ) ? <div onClick={() => onclick(currentIndex, activeIndex)} className={divClassName}><h5>{title}</h5><h5>➡️</h5></div> : (
        <div className="">
            <div onClick={() => onclick(currentIndex, activeIndex)} className={divClassName}>
                <h5>{title}</h5>
                <h5>➡️</h5>
            </div>
            <div className="p-2">
                    {
                        items?.map((element, index) => {
                            return (
                                <MenuItemOne 
                                    key={element.card.info.name + index}
                                    element={element}
                                    index={index}
                                />
                            )
                        })
                    }
            </div>
            
        </div>
  )
}

export default MenuItem