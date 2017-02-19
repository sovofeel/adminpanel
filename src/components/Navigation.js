import React, { Component } from 'react';
import './Navigation.css';

class Navigation extends Component {
  render() {
    return <nav className="nav">
            <a href="/" className="nav-link nav-link--active">Новый клиент</a>
            <a href="/" className="nav-link">Расход</a>
          </nav>
  }
}

export default Navigation;
