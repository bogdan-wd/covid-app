import React, {Component} from 'react';
import styles from './App.module.css';

import {Cards, Charts, CountryPicker, Title} from './components';

export default class App extends Component {
  render () {
    return (
      <div className={styles.container}>
        <Title/>
        <Cards />
        <CountryPicker />
        <Charts />

      </div>
    );
  }
}
