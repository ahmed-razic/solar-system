import axios from 'axios';

const NASA_PHOTO_URL = 'https://api.nasa.gov/planetary/apod';
const NASA_TOKEN = 'XHlcwDb8HeXNudeKXwRCOST7ds65t74RExnWmEcp';

const nasaPhoto = axios.create({
  baseURL: NASA_PHOTO_URL,
  //headers: { Authorization: `token $(NASA_TOKEN)` },
});

//get NASA photo of the day
export const getPhoto = async () => {
  const response = await nasaPhoto.get(`?api_key=${NASA_TOKEN}`);
  return response.data;
};
