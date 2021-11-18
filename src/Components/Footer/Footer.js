import React from "react";
import "./Footer.css";
// import logo from "../../img/logo.png";
import { NavLink } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container">

        <div className="row text-white footer-info">
          <div className="col-lg-2">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9bDvV4CEyO1EdrUbL22_aJSo_IDCyX-exhr5MpihY_8yj8pG7VWO1FiZ51YKsJDkJRIM&usqp=CAU" width="180px" alt="" />
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
              Contect us
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
      <h5 className=" text-dark text-center mt-5 mb-0">Copyright © 2021 Tanjilul karim. All Rights Reserved.</h5>
    </footer>
  );
};

export default Footer;
