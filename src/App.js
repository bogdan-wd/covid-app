import React, {Component} from 'react';
import styles from './App.module.css';

import {Cards, Charts, CountryPicker, Title} from './components';

import {fetchData} from './api';



export default class App extends Component {

    state={
        data: {},
    }

    async componentDidMount(){
        const data = await fetchData();

        this.setState({data})

    }


  render () {
    const { data } = this.state;

    return (
      <div className={styles.container}>
        <Title/>
        <Cards data={data} />
        <CountryPicker />
        <Charts />

      </div>
    );
  }
}
