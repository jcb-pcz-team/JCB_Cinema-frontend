import React from "react";
import "./Navigation.scss";

import personIcon from "../../assets/images/person.svg"

export const Navigation: React.FC = () =>{
    return (
        <nav className="navigation">
            <a href="#" className="navigation__link">
                <img src={personIcon} alt="person"/>
                <p className="paragraph">
                    LOGOWANIE
                </p>
            </a>
            <div className="column-separator"></div>
            <a href="#" className="navigation__link">
                <p className="paragraph">
                    REJESTRACJA
                </p>
            </a>
        </nav>
    );
}