import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class HeaderComponent extends Component {
  render() {
    return (
      <div className="header">
        <div className="container">
          <div className="d-flex align-items-center">
            <Link to="/" className="mx-1 header__logo">
              <img
                width="120px"
                height="50px"
                src="https://upload.wikimedia.org/wikipedia/commons/b/b9/Marvel_Logo.svg"
                alt="__logo"
              />
            </Link>

            <div className="header__links mx-3">
              <Link to="/" className="mx-1">
                Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
