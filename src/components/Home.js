import React from 'react';
import HomeHeader from "./HomeHeader";
import HomeBanner from "./HomeBanner";
import HomeThreeColumns from "./HomeThreeColumns";
import HomeSimpleSteps from "./HomeSimpleSteps";
import HomeAboutUs from "./HomeAboutUs";
import HomeWhoWeHelp from "./HomeWhoWeHelp";
import HomeContact from "./HomeContact";
import HomeFooter from "./HomeFooter";

function Home() {
    return (
        <div className="container">
            <HomeHeader />
            <HomeBanner />
            <HomeThreeColumns />
            <HomeSimpleSteps />
            <HomeAboutUs />
            <HomeWhoWeHelp />
            <HomeContact />
            <HomeFooter />
        </div>
    );
}

export default Home;