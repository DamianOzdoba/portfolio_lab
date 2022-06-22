import React from 'react';
import {Link} from "react-scroll";

function HomeHeaderNav() {
    return (
        <div>
            <Link to='homeBanner'>Start</Link>
            <Link to='homeSimpleSteps'>O co chodzi?</Link>
            <Link to='homeAboutUs'>O nas</Link>
            <Link to='homeWhoWeHelp'>Fundacja i organizacje</Link>
            <Link to='homeContact'>Kontakt</Link>
        </div>
    );
}

export default HomeHeaderNav;