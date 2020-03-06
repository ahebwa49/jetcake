import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import MenuButtonClose from "./MenuButtonClose";

import { logoutUser } from "../actions/actions";

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

const mapDispatchToProps = dispatch => ({
  logoutUser: () => {
    dispatch(logoutUser());
  }
});

class MobileMenu extends Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout(e) {
    e.preventDefault();
    // Remove the token from localStorage
    localStorage.removeItem("token");
    // Remove the user object from the Redux store
    this.props.logoutUser();
  }
  
  render() {
    return (
      <div className="mobileMenu">
        <div className="listItems">
          {this.props.user.username ? (
            <>
              <div className="listItem">{this.props.user.username}</div>
              <div className="listItem">
                <Link
                  to="/profile"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Profile
                </Link>
              </div>
              <div className="listItem" onClick={this.handleLogout}>
                logout
              </div>
            </>
          ) : (
            <>
              <div className="listItem">
                <Link
                  to="/signin"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Sign in
                </Link>
              </div>
              <div className="listItem">
                <Link
                  to="/signup"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Register
                </Link>
              </div>
            </>
          )}
        </div>
        <div className="close">
          <MenuButtonClose
            handleShowMobileMenu={this.props.handleShowMobileMenu}
          />
        </div>
      </div>
    );
  }
}
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(MobileMenu)
);
