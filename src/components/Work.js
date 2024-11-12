import React from 'react';

const Work = () => {
  return (
    <section className="work section" id="works">
      <h2 className="section-title">Works</h2>
      <div className="work__container bd-grid">
        <a href="https://github.com/Sibikrish3000/Creditcard-Fraud-Detection" className="work__img">
          <img src="assets/img/bigdata.png" alt="" />
          <span className="overlay-text">Creditcard&nbsp;Fraud Detection</span>
        </a>
        <a href="#works" className="work__img">
          <img src="assets/img/ai.png" alt="https://github.com/Sibikrish3000/sms-spam-detection" />
          <div className="overlay-text">SMS&nbsp;Spam Detection</div>
        </a>
        <a href="#works" className="work__img">
          <img src="assets/img/datacheck.png" alt="https://github.com/Sibikrish3000/movie-genre-classification" />
          <div className="overlay-text">Movie&nbsp;Genre Classification</div>
        </a>
        <a href="#works" className="work__img">
          <img src="assets/img/comp.png" alt="" />
          <div className="overlay-text">Assistant&nbsp;Secretary&nbsp;of Placement&nbsp;Coordinator</div>
          <span className="overlay-text-sub">Volunteer</span>
        </a>
        <a href="#works" className="work__img">
          <img src="assets/img/man.png" alt="" />
          <div className="overlay-text"></div>
        </a>
        <a href="#works" className="work__img">
          <img src="assets/img/python.png" alt="" />
          <div className="overlay-text"></div>
        </a>
      </div>
    </section>
  );
};

export default Work;
