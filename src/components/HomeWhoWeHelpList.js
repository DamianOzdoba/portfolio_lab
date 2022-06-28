import React from 'react';

function HomeWhoWeHelpList({whoWeHelp}) {
    return (
        <ul className="home-who-we-help-list">
            {whoWeHelp.map((el, idx) => (
                <li key={idx} className="home-who-we-help-list-element">
                    <div className="home-who-we-help-list-element__main-info">
                        <h2 className="home-who-we-help-list-element__title">{el.name}</h2>
                        <p className="home-who-we-help-list-element__description">{el.desc}</p>
                    </div>
                    <p className="home-who-we-help-list-element__additional-info">{el.stuff}</p>
                </li>
            ))}
        </ul>
    );
}

export default HomeWhoWeHelpList;