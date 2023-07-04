import axios from "axios";
axios.defaults.headers.common["x-api-key"] = "live_QCZj95WV7y5aHrFZOU1tv97vwr8USImx5HkcbueM0YyatinhVZe9lXZJ0EXexuec";

import axios from 'axios';
import Notiflix from 'notiflix';

export function fetchBreeds() {
  return axios
    .get('https://api.thecatapi.com/v1/breeds')
    .then(response => response.data)
    .catch(error => {
      Notiflix.Notify.failure(`Failed to fetch breeds: ${error}`);
    });
}

export function fetchCatByBreed(breedId) {
  return axios
    .get(`https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`)
    .then(response => response.data)
    .catch(error => {
      Notiflix.Notify.failure(`Failed to fetch breed: ${error}`);
    });
}