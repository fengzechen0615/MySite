import React, { useState } from 'react';
import { connect } from 'react-redux';

import Button from '../UI/Button/Button';
import * as actions from '../../store/actions/index';

const Contact = (props) => {
    const [lastName, setLastName] = useState('');
    const [firstName, setFitstName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const orderHandler = (event) => {
        event.preventDefault();
        props.onSendContact(lastName, firstName, email, message);
    };

    return (
        <div class='contact'>
            <div class='container-fluid'>
                <div class='row'>
                    <div class='col-sm-12 col-md-12 text-center'>
                        <div class='contact-header'>
                            <h1>Contact</h1>
                        </div>
                    </div>
                </div>

                <div class='row'>
                    <div class='col-sm-12 col-md-12 text-center'>
                        <div class='contact-header-quote'>
                            <h4>"XXXXXX"</h4>
                            <h4>-XXXX</h4>
                        </div>
                    </div>
                </div>

                <div class='row'>
                    <div class='col-sm-6 col-md-6'>
                        <div class='contact-instructions'>
                            <h2>Reaching out to me</h2>
                            <p>
                                Don't be afraid to contact me! I'm happy to
                                answer any questions, provide more information,
                                or just have a nice conversation! Fill out the
                                form below to being reaching out to me. If you
                                prefer another email client other than your
                                default, which will appear after clicking the
                                button and have all of the information you just
                                entered, you can email me at XXXXXX.
                            </p>
                            <br></br>
                            <br></br>
                            <br></br>
                            <h2>Contact Information</h2>
                            <p>XXXX</p>
                            <p>XXXX</p>
                            <p>(XXXX)-445-7747</p>
                            <p>XXXXXX@gmail.com</p>
                        </div>
                    </div>

                    <div class='col-sm-6 col-md-6'>
                        <div class='contact-form-body'>
                            <form>
                                <div class='row'>
                                    <div class='col-sm-6 col-md-6'>
                                        <div class='firstname'>
                                            <h4>Last Name *</h4>
                                            <input
                                                type='text'
                                                placeholder='First Name'
                                            />
                                        </div>
                                    </div>

                                    <div class='col-sm-6 col-md-6'>
                                        <div class='lastname'>
                                            <h4>First Name *</h4>
                                            <input
                                                type='text'
                                                placeholder='Last Name'
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div class='row'>
                                    <div class='col-sm-12 col-md-12'>
                                        <div class='email'>
                                            <h4>Email *</h4>
                                            <input
                                                type='text'
                                                placeholder='Email'
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div class='row'>
                                    <div class='col-sm-12 col-md-12'>
                                        <div class='message'>
                                            <h4>Message *</h4>
                                            <textarea placeholder='Message'></textarea>
                                        </div>
                                    </div>
                                </div>

                                <div class='row'>
                                    <div class='col-sm-4 col-md-4 col-sm-offset-4 col-md-offset-4'>
                                        <div class='submit-contact'>
                                            <Button
                                                to={'#'}
                                                btnType='white'
                                                clicked={orderHandler}
                                            >
                                                Submit
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {};
};

const mapDispatchToProps = (dispatch) => {
    return {
        onSendContact: (firstName, lastName, email, message) =>
            dispatch(actions.sendContact(firstName, lastName, email, message)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Contact);
