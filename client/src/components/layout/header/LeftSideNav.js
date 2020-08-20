import React from 'react'
import NavLinkButton from '../../utils/NavLinkButton';
import SideNavMenu from '../SideMenu'
import { toAbsoluteUrl } from '../../_helpers/AssestsHelper'

const LeftSideNav=()=> {
  return (
    <div className="nav-left-side">
      <SideNavMenu />
      <img
        alt="Logo"
        src={toAbsoluteUrl("/media/misc/circle.png")}
      />
      <NavLinkButton to={"/"} name={"Home"} />

    </div>
  )
}

export default LeftSideNav;