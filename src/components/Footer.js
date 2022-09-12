import React from "react";
import instagram from '../logos/instagram.svg'
import github from '../logos/github.svg'
import twitter from '../logos/twitter.svg'
import linkedin from '../logos/linkedin.svg'

const Footer = () => {
    return (
        <div className="flex flex-row">
            <img className="basis-1/4 w-10 h-10" src={instagram} />
            <img className="basis-1/4 w-10 h-10" src={github} />
            <img className="basis-1/4 w-10 h-10" src={twitter} />
            <img className="basis-1/4 w-10 h-10" src={linkedin} />
        </div>   
    )
}

export default Footer;