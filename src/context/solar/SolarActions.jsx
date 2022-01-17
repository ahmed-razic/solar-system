import axios from 'axios';

const OPEN_SOLAR_URL = 'https://api.le-systeme-solaire.net/rest/';
const NASA_APOD_URL = 'https://api.nasa.gov/planetary/apod';
const NASA_MARS_PHOTO_URL = 'https://api.nasa.gov/mars-photos/api/v1/rovers/';

const NASA_TOKEN = 'XHlcwDb8HeXNudeKXwRCOST7ds65t74RExnWmEcp';
const OPEN_SOLAR_TOKEN = 'NOT NEEDED';

const openSolar = axios.create({
  baseURL: OPEN_SOLAR_URL,
  //headers: { Authorization: `token $(OPEN_SOLAR_TOKEN)` },
});

const nasaApod = axios.create({
  baseURL: NASA_APOD_URL,
  //headers: { Authorization: `token $(NASA_TOKEN)` },
});

const nasaMars = axios.create({
  baseURL: NASA_MARS_PHOTO_URL,
  //headers: { Authorization: `token $(NASA_TOKEN)` },
});

//get NASA photo of the day
export const getApod = async () => {
  const response = await nasaApod.get(`?api_key=${NASA_TOKEN}`);
};

//get latest Mars photo of the day from selected rover (Curiosity,	Opportunity	or Spirit)
export const getMarsPhoto = async (rover_name, query) => {
  const params = new URLSearchParams({
    q: query,
  });
  const response = await nasaMars.get(`{rover/photos?{params}}`);
  return response.data.item;
};

//get bodies from search
export const searchBodies = async (input) => {
  const params = new URLSearchParams({
    q: `sol=max_sol&api_key=${NASA_TOKEN}`,
  });

  const response = await openSolar.get(`/bodies/`);
  return response.data.items;
};

//get specific body based on ID or name

export const getBody = async (id) => {
  const body = await openSolar.get(`bodies/{id}`);
  return body;
};
