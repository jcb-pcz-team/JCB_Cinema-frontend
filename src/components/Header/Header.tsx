import React, {useState} from "react";
import logoImage from "../../assets/images/logo.png";
import crossImage from "../../assets/images/cross.svg";
import hamburgerImage from "../../assets/images/menu-hamburger.svg";
import "./Header.scss";

import {MobileNavigation} from "../MobileNavigation/MobileNavigation.tsx";
import {Navigation} from "../Navigation/Navigation.tsx";

export const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () : void => {
        setIsMenuOpen(!isMenuOpen);
    };
    return(
        <header className="header">
            <div className="header__wrapper">
                <img src={logoImage} alt="JCB CINEMA" className="logo"/>
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