import axios from 'axios';
//API page: https://www.omdbapi.com/
//API key: 21273b29

const api = axios.create({
    baseURL: 'http://www.omdbapi.com/?apikey=[21273b29]&'
})

export default api;
