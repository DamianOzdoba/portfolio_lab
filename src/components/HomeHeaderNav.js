import React from 'react';
import {Link} from "react-scroll";

function HomeHeaderNav() {
    return (
        <div className="home-header-nav">
            <Link
                to='homeBanner'
                spy={true}
                smooth={true}
            >Start</Link>
            <Link
                to='homeSimpleSteps'
                spy={true}
                smooth={true}
            >O co chodzi?</Link>
            <Link
                to='homeAboutUs'
                spy={true}
                smooth={true}
            >O nas</Link>
            <Link
                to='homeWhoWeHelp'
                spy={true}
                smooth={true}
            >Fundacja i organizacje</Link>
            <Link
                to='homeContact'
                spy={true}
                smooth={true}
            >Kontakt</Link>
        </div>
    );
}

export default HomeHeaderNav;