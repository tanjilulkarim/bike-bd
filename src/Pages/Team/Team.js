import React from 'react';
import "./Team.css"
import img1 from "../../img/team/about-team-1.jpg"
import img2 from "../../img/team/about-team-2.jpg"
import img3 from "../../img/team/about-team-3.jpg"
import img4 from "../../img/team/about-team-4.jpg"
import img5 from "../../img/team/about-team-5.jpg"
import img6 from "../../img/team/about-team-6.jpg"
import img7 from "../../img/team/about-team-7.jpg"
import img8 from "../../img/team/about-team-8.jpg"
const Team = () => {
    return (
        <div className="about-section">

            <div className="container">
            
             <h1 className="service-title  text-center mb-5">MEET OUR
              STRONGEST TEAM</h1>
                <div className="row">
                  <div className="col-lg-3">
                      <div className="about-card">
                      <div className="about-img">
                          <img src={img1} alt="" />
                      </div>
                      <div className="about-info text-center text-white">
                          <h3 className="name">SONIA PARKER</h3>
                          <p className="position">TRAINER</p>
                          <i class="fab fa-facebook"></i>
                          <i class="fab fa-instagram"></i>
                          <i class="fab fa-twitter"></i>
                      </div>
                      </div>
                  </div>
                  <div className="col-lg-3">
                      <div className="about-card">
                      <div className="about-img">
                          <img src={img2} alt="" />
                      </div>
                      <div className="about-info text-center text-white">
                          <h3 className="name">NINA MORITZ</h3>
                          <p className="position">WEB DEVELOPER</p>
                          <i class="fab fa-facebook"></i>
                          <i class="fab fa-instagram"></i>
                          <i class="fab fa-twitter"></i>
                      </div>
                      </div>
                  </div>
                  <div className="col-lg-3">
                      <div className="about-card">
                      <div className="about-img">
                          <img src={img3} alt="" />
                      </div>
                      <div className="about-info text-center text-white">
                          <h3 className="name">JOAN THOMPSON</h3>
                          <p className="position">DESIGNER</p>
                          <i class="fab fa-facebook"></i>
                          <i class="fab fa-instagram"></i>
                          <i class="fab fa-twitter"></i>
                      </div>
                      </div>
                  </div>
                  <div className="col-lg-3">
                      <div className="about-card">
                      <div className="about-img">
                          <img src={img4} alt="" />
                      </div>
                      <div className="about-info text-center text-white">
                          <h3 className="name">ANNA ATKINS</h3>
                          <p className="position">SOFTWARE ENGINEER</p>
                          <i class="fab fa-facebook"></i>
                          <i class="fab fa-instagram"></i>
                          <i class="fab fa-twitter"></i>
                      </div>
                      </div>
                  </div>
                  <div className="col-lg-3">
                      <div className="about-card">
                      <div className="about-img">
                          <img src={img5} alt="" />
                      </div>
                      <div className="about-info text-center text-white">
                          <h3 className="name">MIKE STALONE</h3>
                          <p className="position">TRAINER</p>
                          <i class="fab fa-facebook"></i>
                          <i class="fab fa-instagram"></i>
                          <i class="fab fa-twitter"></i>
                      </div>
                      </div>
                  </div>
                  <div className="col-lg-3">
                      <div className="about-card">
                      <div className="about-img">
                          <img src={img6} alt="" />
                      </div>
                      <div className="about-info text-center text-white">
                          <h3 className="name">SARA MORGAN</h3>
                          <p className="position">JOURNALIST</p>
                          <i class="fab fa-facebook"></i>
                          <i class="fab fa-instagram"></i>
                          <i class="fab fa-twitter"></i>
                      </div>
                      </div>
                  </div>
                  <div className="col-lg-3">
                      <div className="about-card">
                      <div className="about-img">
                          <img src={img7} alt="" />
                      </div>
                      <div className="about-info text-center text-white">
                          <h3 className="name">STEVE CROSS</h3>
                          <p className="position">TRAINER</p>
                          <i class="fab fa-facebook"></i>
                          <i class="fab fa-instagram"></i>
                          <i class="fab fa-twitter"></i>
                      </div>
                      </div>
                  </div>
                  <div className="col-lg-3">
                      <div className="about-card">
                      <div className="about-img">
                          <img src={img8} alt="" />
                      </div>
                      <div className="about-info text-center text-white">
                          <h3 className="name">GLORIA PARKER</h3>
                          <p className="position">EXPERT</p>
                          <i class="fab fa-facebook"></i>
                          <i class="fab fa-instagram"></i>
                          <i class="fab fa-twitter"></i>
                      </div>
                      </div>
                  </div>
                </div>
            </div>
            
        </div>
    );
};

export default Team;