import React from 'react';
import RegisterForm from "./RegisterForm";
import HomeHeader from "./HomeHeader";

function Register() {
    return (
        <div className="container">
            <HomeHeader/>
            <div className="login">
                <h2 className="login__title title">Zarejestruj się</h2>
                <RegisterForm/>
            </div>
        </div>
    );
}

export default Register;