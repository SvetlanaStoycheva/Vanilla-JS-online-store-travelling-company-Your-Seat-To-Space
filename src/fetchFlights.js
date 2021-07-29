import { allFlightsUrl } from './utils.js';

const fetchFlights = async () => {
  try {
    const response = await fetch(allFlightsUrl);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default fetchFlights;
