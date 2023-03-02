import React from 'react';

function NavTabs({ currentPage, handlePageChange }) {
    return (
        <nav>
            <ul> 
                {currentPage !== 'Home' ? 
                <li className='me-3'>
                    <a
                    href='#home'
                    onClick={() => handlePageChange('Home')}>
                    Home 
                    </a>
                </li> : (<></>)
                }
                <li className='me-3'>
                    <a
                    href='#about'
                    onClick={() => handlePageChange('About')}
                    className={currentPage === 'About' ? ' active text-info' : ''}>
                        About 
                        </a>
                        </li>
                        <li className='me-3'>
                            <a
                            href='#portfolio'
                            onClick={() => handlePageChange('Portfolio')}
                            className={currentPage === 'Portfolio'? ' active text-info' : ''}>
                                Project
                                </a>
                        </li>
                        <li className='me-3'>
                            <a
                            href='#contact'
                            onClick={() => handlePageChange('Contact')}
                            className={currentPage === 'Contact' ? 'active text-info' : ''}>
                                Contact
                                </a>
                            </li>
                        </ul>
                    </nav>
                    );
            }

export default NavTabs;