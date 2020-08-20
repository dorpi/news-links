import React from 'react';

import ImgLink from '../utils/ImageLink'
import Divider from '@material-ui/core/Divider'


import { toAbsoluteUrl } from '../_helpers/AssestsHelper';


const MainPageLinks=()=> {
 
    return (
        <div className="main-page-links-container">
            
            <ImgLink src={toAbsoluteUrl('/media/icons/linksIcon.png')} to="/links" alt="Links"></ImgLink>
            <h2>Links List</h2>
            <Divider/>
          
            <ImgLink src={toAbsoluteUrl('/media/icons/newsIcon.png')} to="/news" alt="News"></ImgLink>
            <h2>Search For News</h2>
        </div>
    )
}

export default MainPageLinks;