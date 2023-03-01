import React from 'react';

import Navbar from './Navbar';

function Header({ currentPage, handlePageChange }) {

    return (
        <header>
            <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
        </header>
    );
}

export default Header;