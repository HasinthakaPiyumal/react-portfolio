import React from 'react'
import {BsLinkedin,BsGithub,BsInstagram} from 'react-icons/bs'
const HeaderSocial = () => {
    return (
        <div className="header__social">
            <a href="https://www.linkedin.com/in/hasinthaka-piyumal-5757741ba/" target="_blank"><BsLinkedin/></a>
            <a href="https://github.com/HasinthakaPiyumal" target="_blank"><BsGithub/></a>
            <a href="http://instergram.com" target="_blank"><BsInstagram/></a>
        </div>
    )
}

export default HeaderSocial
