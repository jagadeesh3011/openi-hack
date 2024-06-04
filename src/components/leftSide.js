/* eslint-disable jsx-a11y/anchor-is-valid */
import { React } from 'react';
import { Link } from 'react-router-dom';


const LeftSIde = () => {
    return(
        <>
<div className="dash-board-main-wrapper">
    <div className="left-side-bar">
        <div className="overlay-mobile-area"></div>
        <div className="inner">
            <div className="single-menu-wrapper">
                <a className="single-menu active openuptip" flow="right" tooltip="Search">
                    <div className="icon">
                        <img src={require("../assets/images/icons/01.png")} alt="icons"/>
                    </div>
                    <Link to="/Main" className="logo"><p>Home</p></Link>
                    
                </a>
                <a className="single-menu openuptip" flow="right" tooltip="Search">
                    <div className="icon">
                        <img src={require("../assets/images/icons/02.png")} alt="icons"/>
                    </div>
                    <Link to="/Community" className="logo"><p>Community Feed</p></Link>
                </a>
                <a className="single-menu openuptip" flow="right" tooltip="Search">
                    <div className="icon">
                        <img src={require("../assets/images/icons/04.png")} alt="icons"/>
                    </div>
                    <Link to="/Chat" className="logo"><p>AI Chat Bot</p></Link>
                </a>
                <a className="single-menu openuptip" flow="right" tooltip="Search">
                    <div className="icon">
                        <img src={require("../assets/images/icons/06.png")} alt="icons"/>
                    </div>
                    <Link to="/Voice" className="logo"><p><p>Voice Generate</p></p></Link>
                </a>
            </div>
        </div>
    </div>
    </div>
    </>
    )
}

export default LeftSIde;