import React from 'react';
import { NavLink } from 'react-router-dom';

import './Nav.css';

const Nav = () => {
    return (
        <div className='navigation'>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-xs-1 col-sm-1 col-md-1 col-lg-1 text-center'>
                        <div className='logo'>
                            <NavLink to='/'>
                                <img src='images/logo.svg' alt='logo'></img>
                            </NavLink>
                        </div>
                    </div>

                    <div className='col-xs-11 col-sm-11 col-md-11 col-lg-11 text-right'>
                        <div className='primary-nav'>
                            <ul>
                                <li>
                                    <NavLink to='/'>Home</NavLink>
                                </li>
                                <li>
                                    <NavLink to='portfolio'>Portfolio</NavLink>
                                </li>
                                <li>
                                    <NavLink to='contact'>Contact</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Nav;
