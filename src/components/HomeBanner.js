import React from 'react';
import {Element} from "react-scroll";
import {Link} from "react-router-dom";

function HomeBanner() {
    return (
        <Element name="homeBanner" className="section">
            <Link to='/logowanie'>ODDAJ RZECZY</Link>
            <Link to='/logowanie'>ZORGANIZUJ ZBIÓRKĘ</Link>
        </Element>
    );
}

export default HomeBanner;