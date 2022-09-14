import React from "react";
import Footer from "./Footer";
import Email from "./Email";
import Name from "./Name";
import About from "./About";

const DarkBusinessCard = () => {
    return (
        <div className="flex-none m-8 w-1/2 h-1/2 border-4 border-black  bg-gray-700">
            <Name />
            <Email />
            <About />
            <Footer/> 
        </div>
    )
}

export default DarkBusinessCard;