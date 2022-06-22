import React from 'react';

function HomeSimpleStepsArticle({icon, title, description}) {
    return (
        <div className="home-simple-steps-article">
            <img
                className="home-simple-steps-article__icon"
                src={icon}
                alt='icon'
            />
            <h2 className="home-simple-steps-article__title">{title}</h2>
            <p className="home-simple-steps-article__description">{description}</p>
        </div>
    );
}

export default HomeSimpleStepsArticle;