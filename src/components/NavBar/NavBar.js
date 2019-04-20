// import React from "react";
// import { Link } from "react-router-dom";
// import styles from "./index.module.css";
//
// const NavBar = () => (
//   <ul className={styles["navbar"]}>
//     <Link to="/" className={styles["item"]}>
//       <h3>Reports</h3>
//     </Link>
//     <Link to="/seekers" className={styles["item"]}>
//       <h3>Seekers</h3>
//     </Link>
//     <div className={styles["item"]}>
//       <h3> Sign out </h3>
//     </div>
//   </ul>
// );
//
// export default NavBar;

import React, { Component } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarNav,
  NavbarToggler,
  Collapse,
  NavItem,
  NavLink
} from "mdbreact";
import { Fa } from "mdbreact";
import "./Nav.css";

class NavbarFeatures extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      isWideEnough: false
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    if (this.state.collapse === true) {
      this.setState({ collapse: false });
    } else {
      this.setState({ collapse: true });
    }
  }

  scrollToBottom = () => {
    window.scrollTo(0, document.body.scrollHeight);
  };

  render() {
    return (
      <div>
        <Navbar
          dark
          expand="sm"
          scrolling
          className="nav-bar special-color-dark"
          fixed="top"
          scrollingNavbarOffset={20}
        >
          <NavbarBrand>
            <NavLink to="/">
              {" "}
              <h1 className="logo-letter" onClick={this.onClick}>
                {" "}
                Haq{" "}
              </h1>{" "}
            </NavLink>
          </NavbarBrand>
          {!this.state.isWideEnough && <NavbarToggler onClick={this.onClick} />}
          <Collapse isOpen={this.state.collapse} navbar>
            <NavbarNav left>
              <NavItem className="nav-item">
                <NavLink
                  to="/"
                  activeClassName="is-active"
                  exact={true}
                  onClick={this.onClick}
                  className="nav-item-text"
                >
                  REPORTS
                </NavLink>
              </NavItem>
              <NavItem className="nav-item">
                <NavLink
                  to="/seekers"
                  activeClassName="is-active"
                  onClick={this.onClick}
                  className="nav-item-text"
                >
                  {" "}
                  SEEKERS{" "}
                </NavLink>
              </NavItem>
            </NavbarNav>
            <NavbarNav right>
              <NavItem>
                <div className="d-flex flex-row login-logout">
                  {" "}
                  <p style={{ marginBottom: "0px" }}> SIGNOUT </p>{" "}
                </div>
                );
              </NavItem>
            </NavbarNav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default NavbarFeatures;
