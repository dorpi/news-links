import React from 'react';

import PropsType from 'prop-types'
import Header from './header/Header';

import './layout-styles.scss'



const Layout=(props)=> {




  return (

    <div className='layout-container'>
      <Header />
      <div className="main-container">
        {props.children}
      </div>
      <footer className="footer-container" />
    </div>
  )
}

Layout.PropsType={
  childern:PropsType.func
}

export default Layout