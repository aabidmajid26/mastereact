import React from 'react'
import { MENU_IMG_URL } from '../utils/constants'

const MenuItem = ({name, price, imgUrl}) => {
  return (
    <div className="restaurant-card">
            <img className="restaurant-image" src={MENU_IMG_URL + imgUrl} 
                alt={name}/>
            <div className="restaurant-card-details">

                <h4>{name} </h4>
                <h5>Rs. {price}</h5>
            </div>
        </div>
  )
}

export default MenuItem