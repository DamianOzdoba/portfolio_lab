import React, {useState} from 'react';
import {Element} from "react-scroll";
import {Carousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import CarouselElement from "./CarouselElement";


function HomeWhoWeHelp() {
    const [whoWeHelp, setWhoWeHelp] = useState('fundations');

    const defStyle = {
        marginLeft: 10,
        marginRight: 10,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 18,
        width: 40,
        height: 50,
        cursor: "pointer",
        color: "#3C3C3CFF"
    };

    return (
        <Element name='homeWhoWeHelp' className="home-who-we-help">
            <h2 className="title">Komu pomagamy?</h2>
            <div className="home-who-we-help__container">
                <div className="home-who-we-help__btns">
                    <button className="btn btn--wwh" onClick={() => setWhoWeHelp('fundations')}>Fundacjom</button>
                    <button className="btn btn--wwh" onClick={() => setWhoWeHelp('organizations')}>Organizacjom
                        pozarządowym
                    </button>
                    <button className="btn btn--wwh" onClick={() => setWhoWeHelp('local')}>Lokalnym zbiórkom</button>
                </div>
                {whoWeHelp === 'fundations' ?
                    <div className="home-who-we-help__content">
                        <p className="home-who-we-help__description">W naszej bazie znajdziesz listę zweryfikowanych
                            Fundacji, z którymi współpracujemy. Możesz
                            sprawdzić czym się zajmują, komu pomagają i czego potrzebują.</p>
                        <Carousel
                            selectedItem={0}
                            showArrows={false}
                            showStatus={false}
                            renderIndicator={(onClickHandler, isSelected, index, label) => {
                                const activeStyle = isSelected ?
                                    {...defStyle, border: '0.75px solid #3C3C3CFF'} :
                                    {...defStyle};
                                return (
                                    <span
                                        style={activeStyle}
                                        onClick={onClickHandler}
                                        onKeyDown={onClickHandler}
                                        key={index}
                                        role="button"
                                        tabIndex={0}
                                        aria-label={`${label} ${index + 1}`}
                                    >
                                        {(index + 1)}
                                    </span>
                                );
                            }}
                        >
                            <div>
                                <CarouselElement title={'Fundacja “Dbam o Zdrowie”'}/>
                                <span style={{display: 'block', height: 1, width: '100%', backgroundColor: '#3C3C3CFF'}}></span>
                                <CarouselElement title={'Fundacja “Dbam o Zdrowie”'}/>
                                <span style={{display: 'block', height: 1, width: '100%', backgroundColor: '#3C3C3CFF'}}></span>
                                <CarouselElement title={'Fundacja “Dbam o Zdrowie”'}/>
                            </div>
                            <div>
                                <CarouselElement title={'Fundacja “Dbam o Zdrowie”'}/>
                                <span style={{display: 'block', height: 1, width: '100%', backgroundColor: '#3C3C3CFF'}}></span>
                                <CarouselElement title={'Fundacja “Dbam o Zdrowie”'}/>
                                <span style={{display: 'block', height: 1, width: '100%', backgroundColor: '#3C3C3CFF'}}></span>
                                <CarouselElement title={'Fundacja “Dbam o Zdrowie”'}/>
                            </div>
                            <div>
                                <CarouselElement title={'Fundacja “Dbam o Zdrowie”'}/>
                                <span style={{display: 'block', height: 1, width: '100%', backgroundColor: '#3C3C3CFF'}}></span>
                                <CarouselElement title={'Fundacja “Dbam o Zdrowie”'}/>
                                <span style={{display: 'block', height: 1, width: '100%', backgroundColor: '#3C3C3CFF'}}></span>
                                <CarouselElement title={'Fundacja “Dbam o Zdrowie”'}/>
                            </div>
                        </Carousel>
                    </div>
                    : whoWeHelp === 'organizations' ?
                        <div className="home-who-we-help__content">
                            <p className="home-who-we-help__description">W naszej bazie znajdziesz listę zweryfikowanych
                                Fundacji, z którymi współpracujemy. Możesz
                                sprawdzić czym się zajmują, komu pomagają i czego potrzebują.</p>
                            <Carousel
                                selectedItem={0}
                                showArrows={false}
                                showStatus={false}
                                renderIndicator={(onClickHandler, isSelected, index, label) => {
                                    const activeStyle = isSelected ?
                                        {...defStyle, border: '0.75px solid #3C3C3CFF'} :
                                        {...defStyle};
                                    return (
                                        <span
                                            style={activeStyle}
                                            onClick={onClickHandler}
                                            onKeyDown={onClickHandler}
                                            key={index}
                                            role="button"
                                            tabIndex={0}
                                            aria-label={`${label} ${index + 1}`}
                                        >
                                        {(index + 1)}
                                    </span>
                                    );
                                }}
                            >
                                <div>
                                    <CarouselElement title={'Organizacja jakaś'}/>
                                    <span style={{display: 'block', height: 1, width: '100%', backgroundColor: '#3C3C3CFF'}}></span>
                                    <CarouselElement title={'Organizacja jakaś'}/>
                                    <span style={{display: 'block', height: 1, width: '100%', backgroundColor: '#3C3C3CFF'}}></span>
                                    <CarouselElement title={'Organizacja jakaś'}/>
                                </div>
                                <div>
                                    <CarouselElement title={'Organizacja jakaś'}/>
                                    <span style={{display: 'block', height: 1, width: '100%', backgroundColor: '#3C3C3CFF'}}></span>
                                    <CarouselElement title={'Organizacja jakaś'}/>
                                    <span style={{display: 'block', height: 1, width: '100%', backgroundColor: '#3C3C3CFF'}}></span>
                                    <CarouselElement title={'Organizacja jakaś'}/>
                                </div>
                            </Carousel>
                        </div>
                        :
                        <div className="home-who-we-help__content">
                            <p className="home-who-we-help__description">W naszej bazie znajdziesz listę zweryfikowanych
                                Fundacji, z którymi współpracujemy. Możesz
                                sprawdzić czym się zajmują, komu pomagają i czego potrzebują.</p>
                            <Carousel
                                selectedItem={0}
                                showArrows={false}
                                showStatus={false}
                                showIndicators={false}
                                renderIndicator={(onClickHandler, isSelected, index, label) => {
                                    const activeStyle = isSelected ?
                                        {...defStyle, border: '0.75px solid #3C3C3CFF'} :
                                        {...defStyle};
                                    return (
                                        <span
                                            style={activeStyle}
                                            onClick={onClickHandler}
                                            onKeyDown={onClickHandler}
                                            key={index}
                                            role="button"
                                            tabIndex={0}
                                            aria-label={`${label} ${index + 1}`}
                                        >
                                        {(index + 1)}
                                    </span>
                                    );
                                }}
                            >
                                <div>
                                    <CarouselElement title={'Lokalna zbiórka'}/>
                                    <span style={{display: 'block', height: 1, width: '100%', backgroundColor: '#3C3C3CFF'}}></span>
                                    <CarouselElement title={'Lokalna zbiórka'}/>
                                    <span style={{display: 'block', height: 1, width: '100%', backgroundColor: '#3C3C3CFF'}}></span>
                                    <CarouselElement title={'Lokalna zbiórka'}/>
                                </div>
                            </Carousel>
                        </div>
                }
            </div>
        </Element>
    );
}

export default HomeWhoWeHelp;