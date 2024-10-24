import React from "react";
import { useFormik } from "formik";
import * as Yup from 'yup';

import "./ReagistrationForm.scss";

export const RegistrationForm: React.FC = () => {
    const formik = useFormik({
        initialValues: {
            name: '',
            surname: '',
            email: '',
            password: '',
        },
        validationSchema: Yup.object({
            name: Yup.string()
                .required('Imię jest wymagane'),
            surname: Yup.string()
                .required('Nazwisko jest wymagane'),
            email: Yup.string()
                .email('Nieprawidłowy adres email').required('Pole wymagane'),
            password: Yup.string()
                .required('Nie podano hasła')
                .min(8, 'Hasło musi mieć minimum 8 znaków')
                .matches(/[a-zA-Z]/, 'Hasło musi zawierać litery'),
        }),
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    return (
        <form onSubmit={formik.handleSubmit} className="form">
            <h2 className="secondary-heading">Zarejestruj się</h2>

            <div>
                <label htmlFor="name">Imię</label>
                <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Imię"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.name}
                />
                {formik.touched.name && formik.errors.name ? (
                    <div className="error-message">{formik.errors.name}</div>
                ) : null}
            </div>

            <div>
                <label htmlFor="surname">Nazwisko</label>
                <input
                    id="surname"
                    name="surname"
                    type="text"
                    placeholder="Nazwisko"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.surname}
                />
                {formik.touched.surname && formik.errors.surname ? (
                    <div className="error-message">{formik.errors.surname}</div>
                ) : null}
            </div>

            <div>
                <label htmlFor="email">Email</label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                />
                {formik.touched.email && formik.errors.email ? (
                    <div className="error-message">{formik.errors.email}</div>
                ) : null}
            </div>

            <div>
                <label htmlFor="password">Hasło</label>
                <input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Hasło"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.password}
                />
                {formik.touched.password && formik.errors.password ? (
                    <div className="error-message">{formik.errors.password}</div>
                ) : null}
            </div>

            <button className="submit-button" type="submit">ZAREJESTRUJ SIĘ</button>
        </form>

    );
};
