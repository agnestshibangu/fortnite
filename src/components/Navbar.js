import React from 'react';
//import { Link } from 'react-router-dom';
import '../style/SASS/components/header.scss';
import { SiEpicgames } from "react-icons/si";
import FortniteLogo from "../style/logos/FortniteLogo.svg"
import { FaBars } from "react-icons/fa"
import { IoSearchOutline } from "react-icons/io5";
import { BsGlobe } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";

function Header() {
    return (
        <div>
            <div className="nav-container">

                <div className="button-group1">
                    <SiEpicgames className="epic-game-logo" />
                    <img className="fortnite-logo-header" src={FortniteLogo} alt='logo-fortnite' />
                    <FaBars className="fa-bars-white" />
                </div>
                
                <div className="right-navbar">
                    <IoSearchOutline className="io-search-icon-white"/>
                    <BsGlobe className="bs-globe-icon-white" />
                    <a className="button-connexion"> 
                    <FaUserAlt className="fa-icon-user-white" />
                    CONNEXION
                    </a>
                    <button className="download-button">TÉLÉCHARGER</button>
                </div>
             


            </div>

          

        </div>
    )
}

export default Header