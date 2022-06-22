import React from 'react';
import {Link} from "react-router-dom";

function HomeHeaderUser() {
    return (
        <div>
            <Link to="/logowanie">Zaloguj</Link>
            <Link to="/rejestracja">Załóż konto</Link>
        </div>
    );
}

export default HomeHeaderUser;