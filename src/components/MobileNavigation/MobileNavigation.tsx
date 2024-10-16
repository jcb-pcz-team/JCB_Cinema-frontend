import React from "react";
import "./MobileNavigation.scss";

export const MobileNavigation: React.FC = () =>{
    return (
        <nav className="navigation-mobile">
            <a href="#" className="navigation-mobile__link">LOGOWANIE</a>
            <a href="#" className="navigation-mobile__link">REJESTRACJA</a>
        </nav>
    );
}