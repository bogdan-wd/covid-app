import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

export const fetchData = async () => {
  try {
    const { data:{ deaths, recovered, confirmed, lastUpdate } } = await axios.get (url);

    return { deaths, recovered, confirmed, lastUpdate }
    
  } 
  catch (error) {

  }
};
