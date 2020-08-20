import React from 'react';
import PropsType from 'prop-types'
import './links-page-style.scss'


const Link = ({ name, url,imgSrc }) => {
    
    
    return (
        <div className='link-container'>
            <a href={`https://${url}`} target='_blank' rel="noopener noreferrer">  
                <button className='link-button-style'>
                    <img key={Date.now()} src={"http://localhost:5000/"+imgSrc} className="img-style"  alt="Missing"  />
                    <span>{name}</span>
                </button>
            </a>
        </div>

    );
}


Link.PropsType={
    name:PropsType.string, 
    url:PropsType.string,
    imgSrc:PropsType.string 
}
export default Link;
