import React, {useState} from 'react';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import axios from "axios";

function ContactForm() {
    const [isSent, setIsSend] = useState(false);
    return (
        <Formik
            initialValues={{name: '', email: '', message: ''}}
            validationSchema={Yup.object({
                name: Yup.string()
                    .min(3, 'Podane imię jest nieprawidłowe!')
                    .required('Imię jest wymagane!')
                    .matches(/^\S+$/, 'Imię nie może zawierać spacji!'),
                email: Yup.string()
                    .email('Podany adres amail jest nieprawidłowy!')
                    .required('Adres email jest wymagany!'),
                message: Yup.string()
                    .min(120, 'Wiadomość musi mieć co najmniej 120 znaków!')
                    .required('Wiadomość jest wymagana!'),
            })}
            onSubmit={(values, {setSubmitting}) => {
                axios.post('https://fer-api.coderslab.pl/v1/portfolio/contact', values, {
                    "headers": {
                        "content-type": "application/json",
                    }
                })
                    .then(r => {
                        setSubmitting(false);
                        setIsSend(true);
                        console.log('ok');
                    })
            }}
        >

            <Form className="form">
                {isSent === true ? <span>Wiadomość została wysłana!<br/>Wkrótce się skontaktujemy.</span> : null}
                <div className="form__container">
                    <div className="form__input">
                        <label htmlFor="name">Wpisz swoje imię</label>
                        <Field name="name" type="text" placeholder="Krzysztof"/>
                        <ErrorMessage component="span" name="name"/>
                    </div>
                    <div className="form__input">
                        <label htmlFor="email">Wpisz swój email</label>
                        <Field name="email" type="email" placeholder="abc@xyz.pl"/>
                        <ErrorMessage component="span" name="email"/>
                    </div>
                </div>
                <div className="form__input">
                    <label htmlFor="message">Wpisz swoją wiadomość</label>
                    <Field name="message" component="textarea"
                           placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."/>
                    <ErrorMessage component="span" name="message"/>
                </div>
                <button className="form__btn" type="submit">Wyślij</button>
            </Form>
        </Formik>
    )
}


export default ContactForm;