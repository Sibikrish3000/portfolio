import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faBars, faEnvelope, faDatabase, faChartBar, faCodeBranch } from '@fortawesome/free-solid-svg-icons';
import {faFacebook, faInstagram,faXTwitter} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer className="footer">
            <p className="footer__title">Sibi Krishnamoorthy</p>
            <div className="footer__social">
                <a href="https://www.facebook.com/Sibikrish3000" className="footer__icon"><FontAwesomeIcon icon={faFacebook} /></a>
                <a href="https://www.instagram.com/wasperversa_302/" className="footer__icon"><FontAwesomeIcon icon={faInstagram} /></a>
                <a href="https://twitter.com/sibikrish3000" className="footer__icon"><FontAwesomeIcon icon={faXTwitter} /></a>
            </div>
            <p className="footer__copy">&#169; Sibikrish. All rigths reserved 2024</p>
        </footer>
    );
};

export default Footer;
