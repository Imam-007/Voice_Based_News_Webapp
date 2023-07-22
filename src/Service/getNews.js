import axios from "axios";
export  function getNews(category='General') {
    const API_KEY=`28dbc11893f241e39f323b0063bea64e`;
    const API_Endpont= `https://newsapi.org/v2/top-headlines?country=us&category=${category}`;

    return axios.get(`${API_Endpont}&apikey=${API_KEY}`) 

}