import React from 'react';

import Href from '../UI/Href/Href';

const Footer = () => {
    return (
        <div class='footer'>
            <div class='container-fluid'>
                <div class='row'>
                    <div class='media-links'>
                        <div class='col-sm-2 col-md-1 col-sm-offset-1 col-md-offset-4'>
                            <div class='facebook'>
                                <Href
                                    to='#'
                                    name='facebook'
                                    type='image'
                                ></Href>
                            </div>
                        </div>

                        <div class='col-sm-2 col-md-1'>
                            <div class='linkedin'>
                                <Href
                                    to='#'
                                    name='linkedin'
                                    type='image'
                                ></Href>
                            </div>
                        </div>

                        <div class='col-sm-2 col-md-1'>
                            <div class='pinterest'>
                                <Href
                                    to='#'
                                    name='pinterest'
                                    type='image'
                                ></Href>
                            </div>
                        </div>

                        <div class='col-sm-2 col-md-1'>
                            <div class='email-icon'>
                                <Href to='#' name='email' type='image'></Href>
                            </div>
                        </div>
                    </div>
                </div>

                <div class='row'>
                    <div class='col-sm-6 col-md-6 text-right'>
                        <div class='personal-contact phone'>
                            <h4>Phone: XXXXXX</h4>
                        </div>
                    </div>

                    <div class='col-sm-6 col-md-6 text-left'>
                        <div class='personal-contact email-personal-contact'>
                            <h4>Email: XXXXX@gmail.com</h4>
                        </div>
                    </div>
                </div>

                <div class='row'>
                    <div class='col-sm-4 col-md-4 text-center'>
                        <div class='company-information'>
                            <h3>XXXX</h3>
                            <h4>Copyright &copy; 2021</h4>
                            <h4>NY</h4>
                        </div>
                    </div>

                    <div class='col-sm-2 col-md-2 text-center'>
                        <div class='home-footer'>
                            <h4>
                                <Href to='#' name='Home'></Href>
                            </h4>
                        </div>
                    </div>

                    <div class='col-sm-2 col-md-2 text-center'>
                        <div class='portfolio-footer'>
                            <h4>
                                <Href to='#' name='Portfolio'></Href>
                            </h4>
                            <ul>
                                <li>
                                    <Href to='#' name='Project1'></Href>
                                </li>
                                <li>
                                    <Href to='#' name='Project2'></Href>
                                </li>
                                <li>
                                    <Href to='#' name='Project3'></Href>
                                </li>
                                <li>
                                    <Href to='#' name='Home'>
                                        Sell All
                                    </Href>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div class='col-sm-2 col-md-2 text-center'>
                        <div class='resume-footer'>
                            <h4>
                                <Href to='#' name='Resume'></Href>
                            </h4>
                            <ul>
                                <li>
                                    <Href to='#' name='Download'></Href>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div class='col-sm-2 col-md-2 text-center'>
                        <div class='contact-footer'>
                            <h4>
                                <Href to='#' name='Contact'></Href>
                            </h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
