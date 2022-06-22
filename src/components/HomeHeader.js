import React from 'react';
import HomeHeaderUser from "./HomeHeaderUser";
import HomeHeaderNav from "./HomeHeaderNav";

function HomeHeader() {
    return (
        <div className="home-header">
            <HomeHeaderUser />
            <HomeHeaderNav />
        </div>
    );
}

export default HomeHeader;