// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Footer.css';
import { FaArrowUp } from 'react-icons/fa';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="footer-container">
            <div className="copyright">&copy; {currentYear} Hindi Club VIT Bhopal University</div>
            <div className="scroll-up" onClick={scrollToTop}>
                <FaArrowUp></FaArrowUp>
            </div>
        </footer>
    );
};

export default Footer;
