import axios from 'axios';
//API page: https://www.omdbapi.com/
//API key: 21273b29
//Example: https://www.omdbapi.com/?apikey=21273b29&t=Toy+Story

const api = axios.create({
    baseURL: 'https://www.omdbapi.com'
})

export default api;
