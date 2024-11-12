import React from 'react';

const About = () => {
  return (
    <section className="about section" id="about">
          <h2 className="section-title">About</h2>
          <div className="about__container bd-grid">
            <div className="about__img">
              <img src="./assets/img/about.jpg" alt="About me" loading="lazy" />
            </div>
            <div>
              <h2 className="about__subtitle">I am Sibi Krishnamoorthy</h2>
              <p className="about__text">
                As a student enrolled in the B.E. CSE program with a specialization in Data Science at Annamalai University and Assistant Secretary of Placement Coordinator, I'm deeply engaged in computer science and data analytics.
              </p>
            </div>
          </div>
        </section>
  );
};

export default About;
