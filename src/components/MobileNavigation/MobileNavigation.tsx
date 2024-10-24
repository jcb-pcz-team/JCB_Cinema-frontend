import React from "react";
import "./MobileNavigation.scss";
import {Link} from "react-router-dom";

export const MobileNavigation: React.FC = () =>{
    return (
        <nav className="navigation-mobile">
            <Link to={`login`} className="navigation-mobile__link">
                <p className="paragraph">
                    LOGOWANIE
                </p>
            </Link>
            <a href="#" className="navigation-mobile__link">
                <p className="paragraph">
                    REJESTRACJA
                </p>
            </a>
        </nav>
    );
}