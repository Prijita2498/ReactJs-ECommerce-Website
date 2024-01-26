import React from "react";
import Hero from "../Components/Hero/Hero";
import NewCollections from "../Components/NewCollections/NewCollections";
import NewsLetter from "../Components/NewsLetter/NewsLetter";
import Offer from "../Components/Offers/Offer";
import Popular from "../Components/Popular/Popular";

function Shop(){
    return(
        <div>
            <Hero/>
            <Popular/>
            <Offer/>
            <NewCollections/>
            <NewsLetter/>
        </div>
    )
}

export default Shop;