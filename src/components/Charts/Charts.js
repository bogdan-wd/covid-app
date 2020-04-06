import React, {useState, useEffect} from 'react';
import styles from './Charts.module.css';
import {fetchDailyData} from './../../api';

import {Line, Bar} from 'react-chartjs-2';

const Charts = () => {
  const [dailyData, setDailyData] = useState ([]);

  useEffect (() => {
    const fetchApi = async () => {
      setDailyData (await fetchDailyData ());
    };
    console.log(dailyData)
    fetchApi ();
  }, []);

  const lineChart = (
      dailyData.length !== 0
    ? (<Line    
        option={{
             options : {
                legend: {
                  labels: {
                    fontColor: "#fff",
                    fontSize: 1000
                  }
                },
        }}}
        data={{
          labels: dailyData.map(({date}) => date),

          datasets: [{
              data: dailyData.map(({confirmed}) => confirmed),
              label: 'Infected',
              fill: true,
              borderColor: '#3333ff'
          }, {
              data: dailyData.map(({deaths}) => deaths),
              label: 'Deaths',
              fill: true,
              backgroundColor: 'rgba(255, 0, 0, .5)',
              borderColor: 'red', 
          }],
        }}
      />)
    : null
)
    
  return <div className={styles.container}>     {lineChart} </div>;
};

export default Charts;
