import React from "react";
import Footer from "./Footer";
import Email from "./Email";
import Name from "./Name";
import About from "./About";

const DarkBusinessCard = () => {
    return (
        <div className="border-4 border-black align-center bg-gray-700">
            <Name />
            <Email />
            <About />
            <Footer/> 
        </div>
    )
}

export default DarkBusinessCard;