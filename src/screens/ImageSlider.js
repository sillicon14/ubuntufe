import React from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import img1 from '../Images/3.png';
import img2 from '../Images/1.png';
import img3 from '../Images/2.png';
import img4 from '../Images/4.png';
import img5 from '../Images/5.png';
import './ImageSlider.css';

export default function ImageSlider(){
    return(
        <div className="imageSlider">
            
            <Carousel interval={2000}>
                <Carousel.Item>
                    <Link to='https://en.wikipedia.org/wiki/Ayyappan#:~:text=Ayyappan%20(Sastha%20or%20Dharmasastha%20or,Mohini%20(Vishnu)%20and%20Shiva.&text=Ayyappa%20is%20considered%20to%20be,meditates%20alongside%20Vishnu%20and%20Shiva.'>
                    <img src={img3} height="400px" width="100%" alt="Img1"/>
                    </Link>
                </Carousel.Item>

                <Carousel.Item>
                    <img src={img2} height="400px" width="100%" alt="Img2"/>
                </Carousel.Item>

                <Carousel.Item>
                    <img src={img1} height="400px" width="100%" alt="Img3"/>
                </Carousel.Item>

                <Carousel.Item>
                    <img src={img4} height="400px" width="100%" alt="Img4"/>
                </Carousel.Item>

                <Carousel.Item>
                    <img src={img5} height="400px" width="100%" alt="Img5"/>
                </Carousel.Item>

            </Carousel>
        </div>
    )
}