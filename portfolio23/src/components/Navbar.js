import React from 'react';

function Navbar({ currentPage, handlePageChange }) {
    return (
        <nav className='navbar navbar-expand-lg navbar-light bg-light'>
            <h2><span className='navbar-text text-dark font-weight-bold'>Arturo Serrato</span></h2>
            <div className='collapse navbar-collapse' id='navbarNav'>
                <ul className='navbar-nav'>
                    <li className='nav-item'>
                        <a className={currentPage === 'AboutMe' ? 'nav-link active' : 'nav-link'}
                        href='#about' onClick={() => handlePageChange('AboutMe')}>About Me</a>
                    </li>
                    <li className='nav-item'>
                    <a className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
                        href='#portfolio' onClick={() => handlePageChange('Portfolio')}>Portfolio</a>
                        </li>
                        <li>
                        <a className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
                        href='#resume' onClick={() => handlePageChange('Resume')}>Resume</a>
                        </li>
                        <li>
                        <a className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
                        href='#contact' onClick={() => handlePageChange('Contact')}>Contact Me</a>
                        </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;