import React  from 'react';

import NavLeftSide from './LeftSideNav'
import NavRightSide from './RightSideNav'

import '../layout-styles.scss'

const Header = () => {
  

  return (
 
    <nav className="header-container">
      <NavLeftSide />
      <NavRightSide />
    </nav>


  );
}


export default Header;