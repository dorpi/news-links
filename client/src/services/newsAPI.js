
import Axios from 'axios';

export const getNews = (subject)=>{

    let date = new Date();
    let fromDate = `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`;

    return Axios.get(`http://newsapi.org/v2/everything?q=${subject}&from=${fromDate}sortBy=popularity&apiKey=9004100c7c244cb4aa12b6d74c177f0e`)
}
