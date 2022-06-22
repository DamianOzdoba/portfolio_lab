import React from 'react';

function HomeThreeColumnsArticle({quantity, title, description}) {
    return (
        <div className="home-three-columns-article">
            <h2 className="home-three-columns-article__quantity">{quantity}</h2>
            <h3 className="home-three-columns-article__title">{title}</h3>
            <p className="home-three-columns-article__description">{description}</p>
        </div>
    );
}

export default HomeThreeColumnsArticle;