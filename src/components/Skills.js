import React from 'react';

const Skills = () => {
  return (
    <section className="skills section" id="skills">
          <h2 className="section-title">Skills</h2>
          <div className="skills__container bd-grid">
            <div>
              <h2 className="skills__subtitle">Professional Skills</h2>
              <p className="skills__text">I am dedicated to honing my skills and knowledge in the field of data science. With a solid foundation in computer science principles and a keen interest in data analytics, I am actively seeking opportunities to apply my expertise and contribute to innovative projects.</p>

              {/* Example Skill - SQL */}
              <div className="skills__data">
                <div className="skills__names">
                  <img src='./assets/svg/sql.svg' />
                  <span className="skills__name">SQL</span>
                </div>
                <div className="skills__bar skills__sql"></div>
                <div><span className="skills__percentage">70%</span></div>
              </div>

              {/* Example Skill - Data Visualization */}
              <div className="skills__data">
                <div className="skills__names">
                <img src='./assets/svg/viz.svg' />
                  <span className="skills__name">Data Visualization</span>
                </div>
                <div className="skills__bar skills__vs"></div>
                <div><span className="skills__percentage">75%</span></div>
              </div>

              {/* Example Skill - Python */}
              <div className="skills__data">
                <div className="skills__names">
                <img src='./assets/svg/python.svg' />
                  <span className="skills__name">Python</span>
                </div>
                <div className="skills__bar skills__py"></div>
                <div><span className="skills__percentage">90%</span></div>
              </div>

              <div className="skills__data">
                <div className="skills__names">
                <img src='./assets/svg/ml.svg' />
                  <span className="skills__name">&nbsp;&nbsp;&nbsp;Machine Learning</span>
                </div>
                <div className="skills__bar skills__ml"></div>
                <div><span className="skills__percentage">95%</span></div>
              </div>
            </div>
            <div>              
              <img src="assets/img/vs.png" alt="" className="skills__img"/>
            </div>
          </div>
        </section>
  );
};

export default Skills;
