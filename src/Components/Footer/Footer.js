import React from "react";
import "./Footer.css";
import logo from "../../img/logo.png";
import { NavLink } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container">
        
        <div className="row text-white footer-info">
          <div className="col-lg-2">
            <img src={logo} width="180px" alt="" />
            <p className=" my-3 text-white-50">@2021</p>
          </div>
          <div className="col-lg-2">
            <p className="fw-bold mb-1">
              <strong>Customers</strong>
            </p>
            <p className="m-0">
              {" "}
              <small> Buyers </small>
            </p>
            <p className="m-0">
              {" "}
              <small> Supplier </small>
            </p>
          </div>
          <div className="col-lg-2">
            <p className="fw-bold mb-1">
              <strong>Company</strong>
            </p>
            <NavLink className="text-decoration-none text-white" to="/">
              About us
            </NavLink>
            <br />
            <NavLink className="text-decoration-none text-white" to="/">
              Tour
            </NavLink>
            <br />
            <NavLink className="text-decoration-none text-white" to="/">
              Booking
            </NavLink>
          </div>
          <div className="col-lg-3">
            <p className="fw-bold mb-1">
              <strong>Further Information</strong>
            </p>
            <p className="m-0">
              {" "}
              <small> Terms & condition </small>
            </p>
            <p className="m-0">
              {" "}
              <small> Privacy policy </small>
            </p>
          </div>
          <div className="col-lg-3">
            <p className="fw-bold mb-1">
              <strong>Follow us</strong>
            </p>
            <a className="me-2" href="/">
              <i class="fab fa-facebook"></i>
            </a>
            <a className="me-2" href="/">
              <i class="fab fa-instagram"></i>
            </a>
            <a className="me-2" href="/">
              <i class="fab fa-twitter"></i>
            </a>
            <a className="me-2" href="/">
              <i class="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
        <p className="text-muted text-center mt-5 mb-0">Copyright © 2021 Sanjid Haq. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
