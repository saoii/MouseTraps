import React from 'react';

import logo from './images/mousetrap.png';

import { Link } from 'react-router-dom';

function NavLinks() {
  return (
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <Link className="nav-link" to="/our-story">
          Our story<span className="sr-only">(current)</span>
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link disabled" to="/rides">
          Wait times
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link disabled" to="/wdwquote">
          Quote
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link disabled" to="/about">
          About
        </Link>
      </li>
    </ul>
  );
}

export function Header() {
  return (
    <header>
      <div className="container">
        <div className="logo col-md-5 col-sm-5 col-xs-8">
          <Link to="/">
            <img src={logo} alt="logo" style={{ width: '25px' }} />
          </Link>
          <span className="text">Mouse traps</span>
        </div>
        <div className="mobile-togle col-md-12 col-sm-12 col-xs-12">
          <nav className="navbar navbar-default" role="navigation">
            <div className="navbar-header">
              <button
                type="button"
                id="hamburger"
                className="navbar-toggle x collapsed"
                data-toggle="collapse"
                data-target="#navbar-collapse-x"
              >
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <div className="navbar-brand"></div>
            </div>

            <div className="collapse navbar-collapse" id="navbar-collapse-x">
              <ul className="nav navbar-nav navbar-right">
                <li>
                  <div className="search1">
                    <button type="submit">
                      <i className="fa fa-search"></i>
                    </button>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search"
                    />
                  </div>
                </li>
                <NavLinks />
                <li className="nav-item">Sign-in</li>
              </ul>
            </div>
          </nav>
        </div>
        <div className="right_section col-md-5 col-xs-12">
          <div className="search">
            <button type="submit">
              <i className="fa fa-search"></i>
            </button>
            <input type="text" className="form-control" placeholder="Search" />
          </div>

          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <NavLinks />
            </div>
          </nav>
        </div>

        <div className="sign-in col-md-2">
          <span className="dvider"></span>
          <div className="sign">Sign-in</div>
        </div>
      </div>
    </header>
  );
}
