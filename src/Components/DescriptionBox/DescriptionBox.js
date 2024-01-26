import React from "react";
import './DescriptionBox.css'

export default function DescriptionBox() {
    return(
        <div className="descriptionbox">
            <div className="descriptionbox-navigator">
                <div className="descriptionbox-nav-box">Description</div>
                <div className="descriptionbox-nav-box fade">Reviews (122)</div>
            </div>

            <div className="descriptionbox-description">
                <p>An e-commerce website is an online platform that facilitates buying and selling
                    of products or services over the internet serves as a virtual marketplace where businesses abd individuals
                    showcase their products, interact with customers, and conduct transactions wihtout the need
                    for a physical presence. E-Commerce websites have gained immense popularity due to their 
                    convienient accessibility, and the global reach they offer.
                </p>

                <p>
                   E-Commerce websites typically display products or services a detailed descriptions,
                   images, prices, and any available varieties(e.g., sizes, color). Each product usually has its own dedication
                   with relevant information.    
                </p>
            </div>
        </div>
    )
}