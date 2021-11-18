import React from "react";
import { NavLink, useHistory } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

// import logo from "../../img/logo.png";
import "./Header.css";

const Header = () => {
  const { firebaseContext } = useAuth();
  const { user, Logout, admin } = firebaseContext;
  const history = useHistory();
  const handleClick = () => {
    history.push("/login");
  };

  return (
    <div className="sticky-top">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <NavLink to="/">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9bDvV4CEyO1EdrUbL22_aJSo_IDCyX-exhr5MpihY_8yj8pG7VWO1FiZ51YKsJDkJRIM&usqp=CAU" width="50px" height="50px" alt="" />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center">
              <li className="nav-item">
                <NavLink
                  to="/home"
                  activeStyle={{ color: "turquoise" }}
                  className="nav-link nav-NavLink active "
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  activeStyle={{ color: "turquoise" }}
                  className="nav-link  nav-NavLink active"
                  to="/shop"
                >
                  Shop
                </NavLink>
              </li>
              {!user.email ? (
                <>
                  <li className="nav-item">
                    <button onClick={handleClick} className="btn my-btn">
                      Login
                    </button>
                  </li>
                </>
              ) : (
                <>
                  <li class="nav-item dropdown">
                    <NavLink
                      class="nav-link dropdown-toggle"
                      to="/"
                      id="navbarDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Dashboard
                    </NavLink>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                      {!admin && <NavLink
                        style={{ color: "black" }}
                        activeStyle={{ color: "turquoise" }}
                        className="nav-link active nav-NavLink"
                        to="/pay"
                      >
                        pay
                      </NavLink>}

                      {!admin && <NavLink
                        style={{ color: "black" }}
                        activeStyle={{ color: "turquoise" }}
                        className="nav-link active nav-NavLink"
                        to="/myOrders"
                      >
                        My Orders
                      </NavLink>}

                      {!admin && <NavLink
                        style={{ color: "black" }}
                        activeStyle={{ color: "turquoise" }}
                        className="nav-link active nav-NavLink"
                        to="/review"
                      >
                        Review
                      </NavLink>}

                      {admin &&
                        <>

                          <NavLink
                            style={{ color: "black" }}
                            activeStyle={{ color: "turquoise" }}
                            className="nav-link active nav-NavLink"
                            to="/manageAllOrder"
                          >
                            All Orders
                          </NavLink>
                          <NavLink
                            style={{ color: "black" }}
                            activeStyle={{ color: "turquoise" }}
                            className="nav-link active nav-NavLink"
                            to="/addProducts"
                          >
                            Add a Products
                          </NavLink>
                          <NavLink
                            style={{ color: "black" }}
                            activeStyle={{ color: "turquoise" }}
                            className="nav-link active nav-NavLink"
                            to="/manageProduct"
                          >
                            Manage Products
                          </NavLink>
                          <NavLink
                            style={{ color: "black" }}
                            activeStyle={{ color: "turquoise" }}
                            className="nav-link active nav-NavLink"
                            to="/makeAdmin"
                          >
                            Make Admin
                          </NavLink>
                        </>
                      }
                      <li onClick={Logout} className=" btn ">
                        Log Out
                      </li>

                    </ul>
                  </li>

                  <li className="nav-item">
                    <NavLink
                      activeStyle={{ color: "red" }}
                      className="nav-link active nav-NavLink"
                      to="/"
                    >
                      {user.displayName}
                    </NavLink>
                  </li>
                  <li onClick={Logout} className=" btn ">
                    <i
                      style={{ color: "#F34E3A" }}
                      class="fas fa-sign-out-alt"
                    ></i>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
