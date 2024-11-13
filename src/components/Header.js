import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars} from '@fortawesome/free-solid-svg-icons';
//import { faLinkedin, faGithub, faFacebook, faInstagram,faXTwitter} from '@fortawesome/free-brands-svg-icons';
const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleToggle = () => setShowMenu(!showMenu);
  const handleLinkClick = () => setShowMenu(false);

  return (
    <header className="l-header">
        <nav className="nav bd-grid">
          <div>
            <a href="/" className="nav__logo">Sibi Krishnamoorthy</a>
          </div>
          <div className={`nav__menu ${showMenu ? 'show' : ''}`} id="nav-menu">
            <ul className="nav__list">
              <li className="nav__item"><a href="#home" className="nav__link active-link" aria-label="Home" onClick={handleLinkClick}>Home</a></li>
              <li className="nav__item"><a href="#about" className="nav__link" aria-label="About" onClick={handleLinkClick}>About</a></li>
              <li className="nav__item"><a href="#skills" className="nav__link" aria-label="Skills" onClick={handleLinkClick}>Skills</a></li>
              <li className="nav__item"><a href="#works" className="nav__link" aria-label="Works" onClick={handleLinkClick}>Works</a></li>
              <li className="nav__item"><a href="#contact" className="nav__link" aria-label="Contact" onClick={handleLinkClick}>Contact</a></li>
            </ul>
          </div>
          <div className="nav__toggle" id="nav-toggle" onClick={handleToggle}>
            <FontAwesomeIcon icon={faBars} />
          </div>
        </nav>
      </header>
  );
};
export default Header;

