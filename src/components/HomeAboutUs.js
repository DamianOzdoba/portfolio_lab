import React from 'react';
import {Element} from "react-scroll";
import about_us_img from "../assets/People.jpg";
import signature_svg from "../assets/Signature.svg";

function HomeAboutUs() {
    return (
        <Element name='homeAboutUs' className='home-about-us'>
            <div className="home-about-us__content-container">
                <h2 className="title">O nas</h2>
                <p className="home-about-us__description">Nori grape silver beet broccoli kombu beet greens fava bean
                    potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens
                    parsnip.</p>
                <img
                    className="home-about-us__signature"
                    src={signature_svg}
                    alt='Signature'
                />
            </div>
            <div className="home-about-us__img-container" style={{backgroundImage: `url(${about_us_img})`}}></div>
        </Element>
    );
}

export default HomeAboutUs;