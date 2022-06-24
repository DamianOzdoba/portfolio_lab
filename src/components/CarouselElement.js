import React from 'react';

function CarouselElement({title, description, info}) {
    return (
        <div className="carousel-element">
            <div className="carousel-element__main-info">
                <h2 className="carousel-element__title">{title}</h2>
                <p className="carousel-element__description">Cel i misja: Pomoc osobom znajdującym się w trudnej
                    sytuacji życiowej.</p>
            </div>
            <p className="carousel-element__additional-info">ubrania, jedzenie, sprzęt AGD, meble, zabawki</p>
        </div>
    );
}

export default CarouselElement;