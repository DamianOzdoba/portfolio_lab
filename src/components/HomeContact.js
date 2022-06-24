import React from 'react';
import {Element} from "react-scroll";
import ContactForm from "./ContactForm";

function HomeContact() {
    return (
        <Element name='homeContact' className ="home-contact">
            <h2 className="title title--contact">Skontaktuj się z nami</h2>
            <ContactForm />
        </Element>
    );
}

export default HomeContact;