import axios from "axios";


const BASE_URL = 'https://youtube-v31.p.rapidapi.com'

const options = {
  params: {
    part: 'snippet,id',
    regionCode: 'IN',
    maxResults: '50',
    order: 'date'
  },
  headers: {
    'X-RapidAPI-Key': process.env.React_App_RAPID_API_KEY,
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};
  
  export const fetchFromAPI = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  
  return data;
  }