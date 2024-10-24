import {Link} from "react-router-dom";
import logo from "../../assets/images/logo.png";
import {RegistrationForm} from "../RegistrationForm/ReagistrationForm.tsx";

export const RegistrationPage = () => {
    return (
        <div className="registration-page">
            <div className="registration-page__wrapper">
                <div className="logo-container">
                    <Link to={'/'}>
                        <img src={logo} alt="logo"/>
                    </Link>
                </div>
                <RegistrationForm/>
            </div>
        </div>
    );
}