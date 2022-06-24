import React from 'react';
import * as Yup from "yup";
import {ErrorMessage, Field, Form, Formik} from "formik";

function RegisterForm() {
    return (
        <Formik
            initialValues={{email: '', password: '', password2: ''}}
            validationSchema={Yup.object({
                email: Yup.string()
                    .email('Podany adres amail jest nieprawidłowy!')
                    .required('Adres email jest wymagany!'),
                password: Yup.string()
                    .min(6, 'Hasło musi mieć co najmniej 6 znaków!')
                    .required('Hasło jest wymagana!'),
                password2: Yup.string()
                    .oneOf([Yup.ref('password'), null], 'Hasło musi być takie samo!')
                    .min(6, 'Hasło musi mieć co najmniej 6 znaków!')
                    .required('Hasło jest wymagana!'),
            })}
            onSubmit={(values, {setSubmitting}) => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
            }
            }
        >
            <Form className="form">
                <div className="form__input">
                    <label htmlFor="email">Email</label>
                    <Field name="email" type="email"/>
                    <ErrorMessage component="span" name="email"/>
                </div>
                <div className="form__input">
                    <label htmlFor="password">Hasło</label>
                    <Field name="password" type="password"/>
                    <ErrorMessage component="span" name="password2"/>
                </div>
                <div className="form__input">
                    <label htmlFor="password2">Powtórz hasło</label>
                    <Field name="password2" type="password2"/>
                    <ErrorMessage component="span" name="password2"/>
                </div>
                <button className="form__btn" type="submit">Zarejestruj się</button>
            </Form>
        </Formik>
    );
}

export default RegisterForm;