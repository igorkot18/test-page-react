import React, { useState } from 'react';
import { Link } from "react-router-dom";

import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';

import { NAV_BAR_DATA } from './constants';

import "./styles.scss"

const NavBar = () => {
    const [state, setState] = useState(false);
    
    return (
        <div>
           <nav className='nav'>
                <ul className={state ? "nav__list-mobile" : "nav__list"}>
                    {NAV_BAR_DATA.map(({url, text, id}) => (
                        <li key={id} className="nav__link">
                            <a href={url}>
                                {text}
                            </a>
                        </li>
                    ))}  
                </ul>
            </nav> 
            <div 
                className='mobile-menu-icon'
                onClick={() => {setState(!state)}}
            >
                {state ? <MenuOpenIcon fontSize='large'/> : <MenuIcon fontSize='large'/>}
            </div>
        </div>
    );
}

export default NavBar;