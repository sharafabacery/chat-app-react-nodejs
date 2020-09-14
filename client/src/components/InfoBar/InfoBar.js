import React from 'react'
import closeicon from '../../icons/closeIcon.png'
import onlineicon from '../../icons/onlineIcon.png'

import './InfoBar.css'
const InfoBar=({room})=> (
     
        <div className="infoBar">
            <div className="leftInnerContainer">
            <img src={onlineicon} alt="onlineimg" className="onlineIcon"/>
            <h3>{room}</h3>
            </div>
            <div className="rightInnerContainer">
            <a href='/'><img src={closeicon} alt="closeimg"/></a>
            </div>
        </div>
    )


export default InfoBar
