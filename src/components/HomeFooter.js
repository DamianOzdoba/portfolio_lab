import React from 'react';
import facebook_svg from "../assets/Facebook.svg";
import instagram_svg from "../assets/Instagram.svg";

function HomeFooter() {
    return (
        <div className="home-footer">
            <p className="home-footer__text">Copyright by Coders Lab</p>
            <div className="home-footer__icons">
                <a href='https://www.facebook.com/'><img
                    className="home-footer__icon"
                    src={facebook_svg}
                    alt='Facebook icon - link'
                />
                </a>
                <a href='https://www.instagram.com/'><img
                    className="home-footer__icon"
                    src={instagram_svg}
                    alt='Instagram icon - link'
                />
                </a>
            </div>
        </div>
    );
}

export default HomeFooter;