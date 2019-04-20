import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Icon } from "antd";
import logo from "../../assets/logo.png";
import styles from "./index.module.css";

class NavBar extends Component {
  render() {
    return (
      <div className={styles["nav-bar"]}>
        <div className={styles["nav-bar-inner"]}>
          <div className={styles["logo"]}>
            {" "}
            <img src={logo} alt="HAQ" />
          </div>
          <div className={styles["items"]}>
            {this.props.tabs.map(item => (
              <NavLink
                exact={true}
                className={styles["item"]}
                activeClassName={styles["active-link"]}
                activeStyle={{ textDecoration: "none" }}
                style={{ textDecoration: "none" }}
                to={item.to}
              >
                <h4> {item.title}</h4>
              </NavLink>
            ))}
          </div>
        </div>
        <div className={styles["sign-out"]}>
          <p> Signout </p>
          <Icon type="sign-out-alt" />
        </div>
      </div>
    );
  }
}

export default NavBar;
