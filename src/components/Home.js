import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
const Home = () => {
    useEffect(() => {
        // Initialize ScrollReveal animations for different elements
        ScrollReveal().reveal('.home__data, .about__img, .skills__subtitle, .skills__text', {
          origin: 'top',
          distance: '60px',
          duration: 2000,
          delay: 200,
        });
        ScrollReveal().reveal('.home__img, .about__subtitle, .about__text, .skills__img', { delay: 400 });
        ScrollReveal().reveal('.home__social-icon', { interval: 200 });
        ScrollReveal().reveal('.skills__data, .work__img, .contact__input', { interval: 200 });
      }, []);
  return (
    <section className="home bd-grid" id="home">
          <div className="home__data">
            <h1 className="home__title">
              Hi,<br />I'm <span className="home__title-color">Sibi K</span><br /> Data Scientist
            </h1>
            <a href="./assets/Resume/Resume.pdf" className="button">Resume</a>
          </div>
          <div className="home__social">
            <a href="https://www.linkedin.com/in/sibikrish3000" className="home__social-icon" target="_blank" rel="noopener noreferrer">
              <img src="./assets/svg/linkedin.svg" fill="currentColor" alt=" " />
            </a>
            <a href="mailto:sibikrish2005@gmail.com" className="home__social-icon">
              <img src="./assets/svg/gmail.svg" fill="currentColor" alt=" "/>
            </a>
            <a href="https://github.com/Sibikrish3000" className="home__social-icon" target="_blank" rel="noopener noreferrer">
              <img src="./assets/svg/github.svg" fill="currentColor" alt=" "/>
            </a>
          </div>

          {/* Lazy-load the profile image */}
          <div className="home__img">
            <svg className="home__blob" viewBox="0 0 479 467">
              <defs>
                <mask id="mask0" mask-type="alpha">
                  <path d="M9.19 145.96C34.03 76.58 114.87 54.73 184.11 29.48C245.8 6.99 311.86 -14.95 370.74 14.14C431.21 44.03 467.95 107.51 477.19 174.31C485.9 237.23 454.93 294.38 416.51 344.95C373.74 401.25 326.07 462.8 255.44 466.19C179.42 469.84 111.55 422.14 65.16 361.8C17.48 299.81 -17.16 219.58 9.19 145.96Z" />
                </mask>
              </defs>
              <g mask="url(#mask0)">
                <path d="M9.19 145.96C34.03 76.58 114.87 54.73 184.11 29.48C245.8 6.99 311.86 -14.95 370.74 14.14C431.21 44.03 467.95 107.51 477.19 174.31C485.9 237.23 454.93 294.38 416.51 344.95C373.74 401.25 326.07 462.8 255.44 466.19C179.42 469.84 111.55 422.14 65.16 361.8C17.48 299.81 -17.16 219.58 9.19 145.96Z" />
                <image className="home__blob-img" x="50" y="60" href="/assets/img/profile.png" alt="Profile image" loading="lazy" />
              </g>
            </svg>
          </div>
        </section>
  );
};

export default Home;
