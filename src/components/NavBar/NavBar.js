import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import styles from "./index.module.css";

class NavBar extends Component {
  render() {
    return (
      <div className={styles["nav-bar"]}>
        <div className={styles["nav-bar-inner"]}>
          <div className={styles["logo"]}>
            {" "}
            <h1> ሃቅ </h1>{" "}
          </div>
          <div className={styles["items"]}>
            <NavLink
              exact={true}
              className={styles["item"]}
              activeClassName={styles["active-link"]}
              activeStyle={{ textDecoration: "none" }}
              style={{ textDecoration: "none" }}
              to="/"
            >
              <h4> REPORTS</h4>
            </NavLink>

            <NavLink
              exact={true}
              className={styles["item"]}
              activeClassName={styles["active-link"]}
              to="/seekers"
            >
              <h4> SEEKERS</h4>
            </NavLink>
          </div>
        </div>
        <div className={styles["sign-out"]}>
          <p> Signout </p>
        </div>
      </div>
    );
  }
}

export default NavBar;
