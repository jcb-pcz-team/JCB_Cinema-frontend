import React from "react";
import "./Navigation.scss";
import { Link } from "react-router-dom";

import personIcon from "../../assets/images/person.svg"

export const Navigation: React.FC = () =>{
    return (
        <nav className="navigation">
            <Link to={`login`} className="navigation__link">
                <img src={personIcon} alt="person"/>
                <p className="paragraph">
                    LOGOWANIE
                </p>
            </Link>
            <div className="column-separator"></div>
            <Link to={`rejestracja`} className="navigation__link">
                <p className="paragraph">
                    REJESTRACJA
                </p>
            </Link>
        </nav>
    );
}