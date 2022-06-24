import React from 'react';
import HomeHeader from "./HomeHeader";
import {Link} from "react-router-dom";

function Logout() {
    return (
        <div className="container">
            <HomeHeader/>
            <div className="login">
                <h2 className="login__title title">Wylogowanie nastąpiło pomyślnie!</h2>
                <Link className="login__btn" to="/">Strona główna</Link>
            </div>
        </div>
    );
}

export default Logout;