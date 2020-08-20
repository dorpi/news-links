import React from 'react'
import PropsTypes from 'prop-types' 
import { CircularProgress } from '@material-ui/core'

const Article=({ article,loading })=> {
    
   
    return (
        <div className="article-container">
            <a href={article.url} target="_blank"  rel="noopener noreferrer">
                <div className='article-content-container'>
                    {(loading)?<CircularProgress size={80} />:<img  src={article.urlToImage?article.urlToImage:'/media/misc/not_available.png'} alt="" />}
                    <div>
                    <p>{article.title.substring(0,50)}</p>
                    <span>{article.source.name}</span>
                    </div>
                    
                </div>
            </a>
        </div>


    )
}
Article.PropsTypes = {
    article:PropsTypes.object,
    loading:PropsTypes.bool

}
export default Article