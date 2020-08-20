import React from 'react'
import {Link} from 'react-router-dom';
import PropsTypes from 'prop-types'

 const ImageLink=({src,to,alt,target})=> {
    return (
        <Link to={to} target={target}>
            <div id="main-image-container">
              <img src={src} alt={alt} />
            </div>
        </Link> 
    )
}

ImageLink.PropsTypes={
    src:PropsTypes.string,
    to:PropsTypes.string,
    alt:PropsTypes.string,
    target:PropsTypes.string
}
export default ImageLink