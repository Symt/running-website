/* eslint jsx-a11y/anchor-is-valid: 0 */
import React from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const Header = ({ handler, active }) => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <img src="logo.png" width="50px" height="50px" alt="logo not found" onClick={() => { handler('home'); }} aria-hidden />
    <a className="navbar-brand" href="#" onClick={() => { handler('home'); }}>Penn Island Track Club</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <a className={`nav-item nav-link ${(active === 'home') ? 'active' : ''}`} id="home" href="#" onClick={(e) => { handler(e.target.id); }}>
          {'Home '}
        </a>
        <a className={`nav-item nav-link ${(active === 'races') ? 'active' : ''}`} id="races" href="#" onClick={(e) => { handler(e.target.id); }}>
          {'Races '}
        </a>
        <a className={`nav-item nav-link ${(active === 'top') ? 'active' : ''}`} id="top" href="#" onClick={(e) => { handler(e.target.id); }}>
          {'Top Runners '}
        </a>
        <a className={`nav-item nav-link ${(active === 'upcoming') ? 'active' : ''}`} id="upcoming" href="#" onClick={(e) => { handler(e.target.id); }}>
          {'Upcoming '}
        </a>
      </div>
    </div>
  </nav>
);

Header.propTypes = {
  handler: PropTypes.func.isRequired,
  active: PropTypes.string.isRequired,
};

export default Header;
