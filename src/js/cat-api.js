import axios from 'axios';
export { fetchBreeds };
export { fetchCatByBreed };
const GET_URL = 'https://api.thecatapi.com/v1';

const API_KEY =
  'live_QbMDGd7Ml8wVuvacfisK4nJj8qDUkxpaknXD3kofocwDkBk6GkmLeKhy1kg04p1G';
axios.defaults.headers.common['x-api-key'] = API_KEY;
const fetchBreeds = async () => {
  try {
    return await axios.get(`${GET_URL}/breeds/`).then(response => {
      return response.data;
    });
  } catch (error) {
    throw new Error(response.status);
  }
};
const fetchCatByBreed = async breedId => {
  try {
    return await axios
      .get(`${GET_URL}/images/search?breed_ids=${breedId}`)
      .then(response => {
        return response.data;
      });
  } catch (error) {
    throw new Error(response.status);
  }
};
