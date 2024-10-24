import {RegistrationForm} from "../RegistrationForm/ReagistrationForm.tsx";
import "./RegistrationPage.scss";
import {Header} from "../Header/Header.tsx";

export const RegistrationPage = () => {
    return (
        <div className="registration-page">
            <Header/>
            <div className="registration-page__wrapper">
                <div className="registraton-container">
                    <RegistrationForm/>
                </div>
            </div>
        </div>
    );
}