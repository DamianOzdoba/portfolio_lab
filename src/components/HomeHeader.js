import React from 'react';
import HomeHeaderUser from "./HomeHeaderUser";
import HomeHeaderNav from "./HomeHeaderNav";

function HomeHeader() {
    return (
        <div className="home-header">
            <div className="home-header__container">
                <HomeHeaderUser/>
                <HomeHeaderNav/>
            </div>
        </div>
    );
}

export default HomeHeader;