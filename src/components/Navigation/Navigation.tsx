import React from "react";
import "./Navigation.scss";

export const Navigation: React.FC = () =>{
    return (
        <nav className="navigation">
            <a href="#" className="navigation__link">LOGOWANIE</a>
            <div className="column-separator"></div>
            <a href="#" className="navigation__link">REJESTRACJA</a>
        </nav>
    );
}