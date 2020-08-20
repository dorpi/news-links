import React from 'react'
import NavLinkButton from '../../utils/NavLinkButton'


const RightSideNav=()=> {
    return (
        <div className="nav-right-buttons">
            
            <NavLinkButton to="/links" name="Links"/>
            <NavLinkButton to="/news" name="News"/>
        </div>
    )
}


export default RightSideNav;