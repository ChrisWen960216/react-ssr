import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class HeaderComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <header>
        <ul>
          <li>
            {' '}
            <Link to="/">Home</Link>
          </li>
          <li>
            {' '}
            <Link to="/login">Login</Link>
          </li>
        </ul>


      </header>
    );
  }
}
