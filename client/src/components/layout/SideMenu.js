import React from 'react';
import {Link} from 'react-router-dom';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button'


import './layout-styles.scss'


const SideMenu=()=> {
    const [toggleMenu, setToggleMenu] = React.useState(false);


    const toggleDrawer = (open) => (event) => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setToggleMenu(open)
    };

    // List in the backdrop
    const list = () => (
        <div
            className="side-nav-menu-container"
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >
            <ul className="menu-nav">
                <li>
                <Link to='/' >
                <h3>Dashboard</h3>
                    </Link>
            </li>
                <li>
                <Link to='/links' >
                    <h3>Links</h3>
                </Link>
            </li>
                <li>
                <Link to="/news" >
                <h3>News</h3>
                    </Link>
            </li>
            </ul>
            <Button variant="contained" onClick={toggleDrawer(false)}>Close</Button>
        </div>
    );

    return (
        <div className="toggle-button">
            <button onClick={toggleDrawer(true)}  >
                <MenuIcon />
            </button>
            <SwipeableDrawer
                anchor='left'
                open={toggleMenu}
                onClose={toggleDrawer(false)}
                onOpen={toggleDrawer(true)}
                onClick={toggleDrawer(false)}
            >
                {list()}
            </SwipeableDrawer>
        </div>
    );
}


export default SideMenu