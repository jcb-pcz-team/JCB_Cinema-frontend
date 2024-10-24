import React, {useState} from "react";
import logoImage from "../../assets/images/logo.png";
import crossImage from "../../assets/images/cross.svg";
import hamburgerImage from "../../assets/images/menu-hamburger.svg";
import "./Header.scss";

import {MobileNavigation} from "../MobileNavigation/MobileNavigation.tsx";
import {Navigation} from "../Navigation/Navigation.tsx";
import {Link} from "react-router-dom";

export const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () : void => {
        setIsMenuOpen(!isMenuOpen);
    };
    return(
        <header className="header">
            <div className="header__wrapper">
                <Link to={`/`}>
                    <img src={logoImage} alt="JCB CINEMA" className="logo"/>
                </Link>
                <Navigation/>
                <button onClick={toggleMenu} className="menu-toggler">
                    {isMenuOpen ? (
                        <img src={crossImage} alt="cross"/>
                    ) : (
                        <img src={hamburgerImage} alt="hamburger"/>
                    )}
                </button>
            </div>
            {isMenuOpen && <MobileNavigation/>}
        </header>
    );
}