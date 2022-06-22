import React from 'react';
import {Element} from "react-scroll";
import {Link} from "react-router-dom";
import HomeSimpleStepsArticle from "./HomeSimpleStepsArticle";

import {ReactComponent as Icon1} from "../assets/Icon-1.svg";
import {ReactComponent as Icon2} from "../assets/Icon-2.svg";
import {ReactComponent as Icon3} from "../assets/Icon-3.svg";
import {ReactComponent as Icon4} from "../assets/Icon-4.svg";

function HomeSimpleSteps() {
    return (
        <Element name="homeSimpleSteps" className="home-simple-steps">
            <h2 className="home-simple-steps">Wystarczą 4 proste kroki</h2>
            <div className="home-simple-steps__container">
                <HomeSimpleStepsArticle
                    icon={<Icon1 />}
                    title={'Wybierz rzeczy'}
                    description={'ubrania, zabawki, sprzęt i inne'}
                />
                <HomeSimpleStepsArticle
                    icon={<Icon2 />}
                    title={'Spakuj je'}
                    description={'skorzystaj z worków na śmieci'}
                />
                <HomeSimpleStepsArticle
                    icon={<Icon3 />}
                    title={'Zdecyduj komu chcesz pomóc'}
                    description={'wybierz zaufane miejsce'}
                />
                <HomeSimpleStepsArticle
                    icon={<Icon4 />}
                    title={'Zamów kuriera'}
                    description={'kurier przyjedzie w dogodnym terminie'}
                />
            </div>
            <Link to='/logowanie'><span>ODDAJ<br /> RZECZY</span></Link>
        </Element>
    );
}

export default HomeSimpleSteps;