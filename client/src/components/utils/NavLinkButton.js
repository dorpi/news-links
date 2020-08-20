import React from 'react'
import { NavLink } from 'react-router-dom';
import propTypes from 'prop-types';
import '../layout/layout-styles.scss'

const NavLinkButton = ({ to, name }) => {
  return (
    <NavLink exact className="nav-button"   activeClassName="nav-button--active"  to={to}>
      {name}
    </NavLink>
  )
}

NavLinkButton.propTypes ={
  to:propTypes.string,
  name: propTypes.string
}


export default NavLinkButton

