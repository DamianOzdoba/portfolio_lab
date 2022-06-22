import React from 'react';
import HomeHeader from "./HomeHeader";
import HomeBanner from "./HomeBanner";
import HomeThreeColumns from "./HomeThreeColumns";
import HomeSimpleSteps from "./HomeSimpleSteps";
import HomeAboutUs from "./HomeAboutUs";
import HomeWhoWeHelp from "./HomeWhoWeHelp";
import HomeContact from "./HomeContact";
import HomeFooter from "./HomeFooter";
import banner_bg from "../assets/Home-Hero-Image.jpg";

function Home() {
    return (
        <div className="container">
            <div className="container__bg-image" style={{backgroundImage: `url(${banner_bg})`}}>
                <HomeHeader/>
                <HomeBanner/>
            </div>
            <HomeThreeColumns/>
            <HomeSimpleSteps/>
            <HomeAboutUs/>
            <HomeWhoWeHelp/>
            <HomeContact/>
            <HomeFooter/>
        </div>
    );
}

export default Home;