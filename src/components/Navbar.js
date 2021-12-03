import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import '../style/SASS/components/header.scss';
import { SiEpicgames } from "react-icons/si";
import FortniteLogo from "../style/logos/FortniteLogo.svg"
import { FaBars } from "react-icons/fa"
import { IoSearchOutline } from "react-icons/io5";
import { BsGlobe } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";

function Header() {


    const [show, setShow] = useState(false)

    function displayLinks() {
        setShow(!show)
    }

    return (
        <div className="header-container">

            {/* begining nav-container */}
            <div className="nav-container">
                <div className="button-group1">
                    <SiEpicgames className="epic-game-logo" />
                    <img className="fortnite-logo-header" src={FortniteLogo} alt='logo-fortnite' />
                    <FaBars className="fa-bars-white" onClick={displayLinks} />
                </div>

                <div className="right-navbar">
                    <IoSearchOutline className="io-search-icon-white" />
                    <BsGlobe className="bs-globe-icon-white" />
                    <a className="button-connexion">
                        <FaUserAlt className="fa-icon-user-white" />
                        CONNEXION
                    </a>
                    <button className="download-button">TÉLÉCHARGER</button>
                </div>
            </div>
            {/* ending nav-container */}

            <div className={show ? "links-container" : "links-container active"}>
                <a className="header-link" >modes</a>
                <div className="horizontal-bar" />
                <a className="header-link" >pass de combat</a>
                <div className="horizontal-bar" />
                <a className="header-link" >club</a>
                <div className="horizontal-bar" />
                <a className="header-link" >v-bucks</a>
                <div className="horizontal-bar" />
                <a className="header-link" >compétition</a>
                <div className="horizontal-bar" />
                <a className="header-link" >actus</a>
                <div className="horizontal-bar" />
                <a className="header-link" >cosplay</a>
                <div className="horizontal-bar" />
                <a className="header-link" >aide</a>
                <div className="horizontal-bar" />

            </div>


        </div>
    )
}

export default Header