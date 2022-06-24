import React from 'react';
import {Element} from "react-scroll";
import {Link} from "react-router-dom";
import HomeSimpleStepsArticle from "./HomeSimpleStepsArticle";

import Icon1 from "../assets/Icon-1.svg";
import Icon2 from "../assets/Icon-2.svg";
import Icon3 from "../assets/Icon-3.svg";
import Icon4 from "../assets/Icon-4.svg";

function HomeSimpleSteps() {
    return (
        <Element name="homeSimpleSteps" className="home-simple-steps">
                <h2 className="title">Wystarczą 4 proste kroki</h2>
                <div className="home-simple-steps__content">
                    <HomeSimpleStepsArticle
                        icon={Icon1}
                        title={'Wybierz rzeczy'}
                        description={'ubrania, zabawki, sprzęt i inne'}
                    />
                    <HomeSimpleStepsArticle
                        icon={Icon2}
                        title={'Spakuj je'}
                        description={'skorzystaj z worków na śmieci'}
                    />
                    <HomeSimpleStepsArticle
                        icon={Icon3}
                        title={'Zdecyduj komu chcesz pomóc'}
                        description={'wybierz zaufane miejsce'}
                    />
                    <HomeSimpleStepsArticle
                        icon={Icon4}
                        title={'Zamów kuriera'}
                        description={'kurier przyjedzie w dogodnym terminie'}
                    />
                </div>
                <Link to='/logowanie' className="btn"><span>ODDAJ<br/> RZECZY</span></Link>
        </Element>
    );
}

export default HomeSimpleSteps;