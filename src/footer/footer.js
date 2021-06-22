import React from 'react'
import "./footer.css"
import {Container} from "react-bootstrap"


export default function Footer(){

    
    return(
      
        <div>
        <footer className="footer-width">
            <div className="footer-top">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-sm-6 col-xs-12 segment-one">
                            <h3 className="h2-h3-color">Divinector</h3>
                            <p>Lorem Ipsum is simply dummy text of the printing and 
                                typesetting industry. Lorem Ipsum has been the industry's 
                                standard dummy text ever since the 1500s, when an unknown 
                                printer took a galley of type and scrambled it to 
                                make a type specimen book.</p>
                        </div>

                        <div className="col-md-3 col-sm-6 col-xs-12 segment-two">
                                    <h2 className="h2-h3-color">USEFUL LINKS</h2>
                                    <ul>
                                        <li><a href="#">Event</a></li>
                                        <li><a href="#">About</a></li>
                                        <li><a href="#">Contact</a></li>
                                        <li><a href="#">Support</a></li>
                                        <li><a href="#">Blogs</a></li>
                                    </ul>
                        </div>

                        <div className="col-md-3 col-sm-6 col-xs-12 segment-three">
                            <h2 className="h2-h3-color">Follow Us</h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and 
                                typesetting industry. Lorem Ipsum has been the industry's 
                                standard dummy text ever since the 1500s, when an unknown 
                                printer took a galley of type and scrambled it to 
                                make a type specimen book.</p>
                            <a href="#"><i className="fa fa-facebook size"></i></a>
                            <a href="#"><i className="fa fa-twitter size"></i></a>
                            <a href="#"><i className="fa fa-linkedin size"></i></a>
                            <a href="#"><i className="fa fa-pinterest size"></i></a>
                        </div>

                <div className="col-md-3 col-sm-6 col-xs-12 segment-four">
                    <h2 className="h2-h3-color">Our Newletter</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and 
                        typesetting industry. Lorem Ipsum has been the industry's 
                        standard dummy </p>
                        
                </div>
                    
                </div>
            </div>
            </div>
        </footer>
        </div>
       
    )

       


}