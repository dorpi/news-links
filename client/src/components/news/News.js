import React, { useState, } from 'react'
import Article from './Article.js'
import Search from './Search.js'
import {getNews} from '../../services/newsAPI'

import './articles-page-style.scss'

const News=()=> {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("Powered By NewsApi")

    const fetchData = (inputValue) => {

        
        getNews(inputValue)
            .then(res => {
                
                if (res.data.articles.length === 0) {
                    setMessage("No results for this keyword");
                    setArticles([]);
                }
                else if (inputValue !== "" && JSON.stringify(articles) !== JSON.stringify(res.data.articles.slice(0, 10))) {
                    setArticles(res.data.articles)
                }
                setLoading(false)
            })
            .catch(err => {
                console.log(err);
                setMessage("Fetch News Failed");
            })
    }


    const onSearch = (event, inputValue) => {
        event.preventDefault();

        if (inputValue !== '') {
            setLoading(true)
            fetchData(inputValue)
        }

    }

    return (
        <div className="news-page-container">
            <div id="news-page-header"></div>
            <Search onSearch={onSearch} />
            {articles.length === 0 ? <h4 style={{ marginLeft: 'auto', marginRight: 'auto', fontFamily: 'georgia' }}>{message}</h4> : ''}
            {articles.length !== 0 ? <div className="articles-container">
                {articles.map((item, index) => {

                    return <Article key={index} article={item} setLoading={setLoading} loading={loading} />
                })}
            </div> : <div className="articles-container hide"></div>}
        </div>
    )
}


export default News;