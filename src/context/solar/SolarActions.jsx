import axios from 'axios';

const OPEN_SOLAR_URL = 'https://api.le-systeme-solaire.net/rest/bodies/';
const NASA_APOD_URL = 'https://api.nasa.gov/planetary/apod';

const NASA_TOKEN = 'XHlcwDb8HeXNudeKXwRCOST7ds65t74RExnWmEcp';
//const OPEN_SOLAR_TOKEN = 'NOT NEEDED';

const openSolar = axios.create({
  baseURL: OPEN_SOLAR_URL,
  //headers: { Authorization: `token $(OPEN_SOLAR_TOKEN)` },
});

const nasaApod = axios.create({
  baseURL: NASA_APOD_URL,
  //headers: { Authorization: `token $(NASA_TOKEN)` },
});

//get NASA photo of the day
export const getApod = async () => {
  const response = await nasaApod.get(`?api_key=${NASA_TOKEN}`);
  return response.data;
};

//get bodies from search
export const getBodies = async () => {
  const response = await openSolar.get();
  return response.data.bodies;
};
