import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import $ from 'jquery';

// import './Nav.css';

const Nav = () => {
    useEffect(() => {
        function navigation() {
            $('.primary-nav').css('height', $('.logo').height());
            $('.primary-nav li').css(
                'margin-top',
                ($('.primary-nav').height() - $('.primary-nav li').height()) /
                    2 +
                    'px'
            );

            $(window).resize(function () {
                setTimeout(navigation, 500);
            });
        }
        navigation();
    }, []);

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
