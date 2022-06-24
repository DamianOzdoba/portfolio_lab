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
import contact_bg from "../assets/Background-Contact-Form.jpg";

function Home() {
    return (
        <div className="container">
            <div className="container__bg-banner" style={{backgroundImage: `url(${banner_bg})`}}>
                <HomeHeader/>
                <HomeBanner/>
            </div>
            <HomeThreeColumns/>
            <HomeSimpleSteps/>
            <HomeAboutUs/>
            <HomeWhoWeHelp/>
            <div className="container__bg-contact" style={{backgroundImage: `url(${contact_bg})`}}>
                <HomeContact/>
                <HomeFooter/>
            </div>
        </div>
    );
}

export default Home;