import React, { useState } from 'react';
import AboutMe from './pages/aboutme';
import Contact from './pages/contact';
import Portfolio from './pages/portfolio';
import Resume from './pages/resume';
import Navbar from './Navbar';

export default function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState('AboutMe');

    const renderPage = () => {
        if(currentPage === 'AboutMe') {
            return <AboutMe />;
        }
        if(currentPage === 'Portfolio') {
            return <Portfolio />;
        }
        if(currentPage === 'Resume') {
            return <Resume />;
        }
        return <Contact />;
    };
    
    const handlePageChange = (page) => setCurrentPage(page);
    
    return (
        <div>
            <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
            {renderPage()}
            </div>
    );
}