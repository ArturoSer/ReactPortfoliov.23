import React from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav';

function Header() {
    return (
        <header>
            <h1>
                <Link to='/'>Arty</Link>
            </h1>
            <Nav />

        </header>
    );
}

export default Header;