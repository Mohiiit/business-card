import React from "react";
import instagram from '../logos/instagram.svg'
import github from '../logos/github.svg'
import twitter from '../logos/twitter.svg'
import linkedin from '../logos/linkedin.svg'

const Footer = () => {
    return (
        <div className="flex justify-evenly p-4 bg-slate-500">
            <img className="w-10 h-10" src={instagram} />
            <img className="w-10 h-10" src={github} />
            <img className="w-10 h-10" src={twitter} />
            <img className="w-10 h-10" src={linkedin} />
        </div>   
    )
}

export default Footer;