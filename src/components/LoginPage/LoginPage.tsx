import "./LoginPage.scss";
import {LoginForm} from "../LoginForm/LoginForm.tsx";
import React from "react";
import {Header} from "../Header/Header.tsx";

export const LoginPage: React.FC = () => {
    return (
        <div className="login-page">
            <div className="login-page__wrapper">
                <Header/>
                <div className="form-container">
                    <LoginForm/>
                </div>
            </div>
        </div>
    );
}