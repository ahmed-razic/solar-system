import axios from 'axios';

const OPEN_SOLAR_URL = 'https://api.le-systeme-solaire.net/rest/bodies/';

const openSolar = axios.create({
  baseURL: OPEN_SOLAR_URL,
  //headers: { Authorization: `token $(OPEN_SOLAR_TOKEN)` },
});

//get bodies from search
export const getBodies = async () => {
  const response = await openSolar.get();
  return response.data.bodies;
};
