// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.css';

export default class Home extends Component {
  render() {
    return (
      <div>
        <div className={styles.container} data-tid="container">
          <h2>Lucoa</h2>
          <p>Bienvenue! </p>
          <div>
            <Link to="/nal">Next Actions list</Link>
          </div>
          <div>
            <Link to="/pl">Projects list</Link>
          </div>
        </div>
      </div>
    );
  }
}
