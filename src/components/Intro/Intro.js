import React from 'react';

// import './Intro.css';
import Button from '../UI/Button/Button';

const Intro = () => {
    return (
        <div class='main'>
            <div class='container-fluid'>
                <div class='row'>
                    <div class='entry-banner text-center'>
                        <h1 id='hello'>Hello, I'm</h1>
                        <h1 id='name'>XXXX</h1>
                        <h1 id='person-description'>
                            UI Developer. UX Designer. Problem Solver.
                        </h1>
                    </div>
                </div>

                <div class='row text-center'>
                    <div className='banner-buttons'>
                        <div className='col-sm-2 col-md-2 col-sm-offset-4 col-md-offset-4'>
                            <Button to={'#about'} btnType='white'>
                                Info
                            </Button>
                        </div>

                        <div className='col-sm-2 col-md-2'>
                            <Button to={'#projects'} btnType='white'>
                                Portfolio
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Intro;
