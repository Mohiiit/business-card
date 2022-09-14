import React from "react";
import logo from "./../logo.svg";

const Name = () => {
    return (
        <div className="text-center font-mono">
            <img src={logo} />
            <div className="text-3xl text-white"> Mohit Dhattarwal</div>
            <div className="text-lg text-skin"> Learning Something</div>
            <div className="text-base text-proffesion"> I don't have a site yet</div>
        </div>
    )
}

export default Name;