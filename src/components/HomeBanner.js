import React from 'react';
import {Element} from "react-scroll";
import {Link} from "react-router-dom";

function HomeBanner() {
    return (
        <Element name="homeBanner" className="home-banner">
            <div className="home-banner__container">
                <h1 className="title">Zacznij pomagać!<br/> Oddaj niechciane rzeczy w zaufane ręce</h1>
                <div className="home-banner__btns">
                    <Link to='/logowanie' className="btn"><span>ODDAJ<br /> RZECZY</span></Link>
                    <Link to='/logowanie' className="btn"><span>ZORGANIZUJ<br /> ZBIÓRKĘ</span></Link>
                </div>
            </div>
        </Element>
    );
}

export default HomeBanner;