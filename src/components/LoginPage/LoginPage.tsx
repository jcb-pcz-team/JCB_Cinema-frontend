import "./LoginPage.scss";
import logo from "../../assets/images/logo.png";

import {LoginForm} from "../LoginForm/LoginForm.tsx";
import {Link} from "react-router-dom";
import React from "react";

export const LoginPage: React.FC = () => {
    return (
        <div className="login-page">
            <div className="login-page__wrapper">
                <div className="logo-container">
                    <Link to={'/'}>
                        <img src={logo} alt="logo"/>
                    </Link>
                </div>
                <LoginForm/>
            </div>
        </div>
    );
}