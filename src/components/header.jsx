import React, { Component } from "react";
import { Link } from "react-router-dom";
import GoogleAuth from "./googleAuth";

class Header extends Component {
  render() {
    return (
      <div className="ui secondary pointing menu">
        <Link to="/" className="item">
          Streamers
        </Link>
        <div className="right menu">
          <Link to="/" className="item">
            All streams
          </Link>
          <GoogleAuth />
        </div>
      </div>
    );
  }
}

export default Header;
