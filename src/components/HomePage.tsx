import React from 'react'
import {IoSpeedometerOutline,IoCarSportOutline} from 'react-icons/io5'
import {IoMdTrendingUp} from 'react-icons/io'
export const HomePage = () => {
  return (
    <div className="home">
   
    <div className="sneaker">
        <div className="sneaker__figure">
        </div>

        <div>
            <img src="/img/NikeAirMaxMotion2.png" alt="" className="sneaker__img shows" color="#A29596"/>
            <img src="/img/NikeAirMax Motion2black.png" alt="" className="sneaker__img" color="#111111"/>
        </div>

        <div className="sneaker__colors">
            <span className="sneaker__color sneaker__colors-one active"  color="#A29596"></span>
            <span className="sneaker__color sneaker__colors-two "  color="#111111"></span>
        </div>
    </div>


    <div className="info">

        <div className="data">
            <span className="data__subtitle">Nike</span>
            <h1 className="data__title">Air Max Motion 2</h1>
            <p className="data__description">They combine breathable mesh without seams for a traditional style.</p>
        </div>

   
        <div className="actions">
      
            <div className="size">
                <h3 className="size__title">Sizes</h3>
                <div className="size__content">
                    <span className="size__tallas active">
                        8.5
                    </span>
                    <span className="size__tallas">
                        9
                    </span>
                    <span className="size__tallas">
                        9.5
                    </span>
                </div>
            </div>

   
            <div className="quantity">
                <h3 className="quantity__title">Qty.</h3>
                <div className="quantity__content"> 
                    <span>-</span>
                    <span>1</span>
                    <span>+</span>
                </div>
            </div>
        </div>


        <div className="price">
            <span className="price__title">$99.00</span>
            <a href="#" className="price__button">ADD TO CART</a>
        </div>
    </div>
</div>
  )
}
