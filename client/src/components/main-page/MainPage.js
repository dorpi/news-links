import React, { useEffect, useState } from 'react';
import MainPageLinks from './MainPageLinks'
import './main-page.scss';
import Divider from '@material-ui/core/Divider'
import Article from '../news/Article'
import { toAbsoluteUrl } from '../_helpers/AssestsHelper';
import {getArticles}from '../../services/api'
const MainPage=()=> {
    const [coronaArticles, setCoronaArticles] = useState([]);
    const [loading,setLoading]=useState(true);

    useEffect(() => {
        
        getArticles('Corona').then(res => {
           
                setLoading(false);
                setCoronaArticles(res.data);
            })
            .catch(err => console.log(err))
    },[])


    return (
        <div className="main-page-container">
           <h1>Corona Virus Latest Articles</h1>
           <Divider orientation="horizontal" variant='middle' />
           <img id="main-page-image-header"src={toAbsoluteUrl('/media/misc/coronaVirusImage.png')} alt="Missing"/>
            { coronaArticles.length!==0?<div className="articles-container">          
                {coronaArticles.map((item, index) => {
                      return  (
                      <Article key={index} article={item} setLoading={setLoading} loading={loading}/> )         
                })}
            </div>:<div className="articles-container hide"></div>}
            
            <Divider orientation="horizontal" variant='middle' />
            <MainPageLinks />
            
        </div>
    )
}
export default MainPage;
