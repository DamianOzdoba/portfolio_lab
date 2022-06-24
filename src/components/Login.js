import React from 'react';
import LoginForm from "./LoginForm";
import HomeHeader from "./HomeHeader";

function Login() {
    return (
        <div className="container">
            <HomeHeader/>
            <div className="login">
                <h2 className="login__title title">Zaloguj się</h2>
                <LoginForm/>
            </div>
        </div>
    );
}

export default Login;