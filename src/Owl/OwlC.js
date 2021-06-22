import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.min.css'
import 'owl.carousel/dist/assets/owl.theme.default.min.css'

import img1 from './images/1.jpg'
import img2 from './images/3.jpg'
import img3 from './images/5.jpg'
import img4 from './images/2.png'
import img5 from './images/4.png'
import img6 from './images/6.png'
import img7 from './images/7.png'


function OwlC(){
    return(
        <OwlCarousel
            className="owl-theme"
            items="4"
            autoplay
            autoplayTimeout="1000"
            stagePadding="50"
            nav
            dots
            loop
            
         >
            <div className="item">
                <img src={img1} />
            </div>
            <div className="item">
                <img src={img2} />
            </div>
            <div className="item">
                <img src={img3} />
            </div>
            <div className="item">
                <img src={img4} />
            </div>
            <div className="item">
                <img src={img5} />
            </div>
            <div className="item">
                <img src={img6} />
            </div>
            <div className="item">
                <img src={img7} />
            </div>
            <div className="item">
                <img src={img3} />
            </div>
            
            
        </OwlCarousel>
    )
}

export default OwlC;