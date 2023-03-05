import React from 'react';

import Header from './Header';
import Footer from './Footer';

import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';

function Portfolio() {
    const [currentPage, setCurrent] = useState('Home');

    const renderpage = () => {
        if (currentPage === 'Home') {
            return <Home />;
    }
    if (currentPage === 'About') {
        return <About />;
    }
    if (currentPage === 'Portfolio') {
        return <Portfolio />;
    }
    return <Contact />;
};

const handlePageChange = (page) => setCurrentPage(page);

return (
    <Fragment>
        <Header currentPage={currentPage} handlePageChange={handlePageChange} />
        {renderpage()}
        <Footer />
    </Fragment>
);
}

export default Portfolio;