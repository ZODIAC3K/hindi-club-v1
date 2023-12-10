import React from 'react';
import { FaArrowUp } from 'react-icons/fa';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="bg-orange-500 text-white py-5 flex justify-between items-center  w-full"> 
            <div className="mb-2">&copy; {currentYear} Hindi Club VIT Bhopal University</div>
            <div className="cursor-pointer p-2 border-2 border-white rounded transition duration-300 hover:bg-white hover:text-orange-500" onClick={scrollToTop}>
                <FaArrowUp />
            </div>
        </footer>
    );
};

export default Footer;
