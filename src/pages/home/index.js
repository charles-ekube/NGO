import React from 'react';
import './style.css';
import { Navbar, Footer, JoinUs } from '../../components';
import { ArrowRight, Val, Valentine, ArrowRightBlack } from '../../assets';

const Home = () => {

    return (
        <>
            <Navbar />
            <main>
                <section className='intro-container'>
                    <div className='intro-overlay'>
                        <div className='overlay-text'>
                            <h2>
                                Let's make it happen, one child at a time
                            </h2>
                            <p>
                                Lets come together and eradicate poverty and hunger once and for all from our communities
                            </p>
                            <button>Donate</button>
                        </div>
                        <div className='intro-overlay-offset'>
                            <div className='valentine-post'>
                                <img src={Valentine} alt='poster' />
                                <div>
                                    <span>12 FEB 2021</span>
                                    <h4>Valentine outreach in Lagos state</h4>
                                    <p>
                                        Lets come together and eradicate once and for all from our communities...
                                    </p>
                                </div>
                            </div>
                            <div className='valentine-post'>
                                <img src={Val} alt='poster' />
                                <div>
                                    <span>12 FEB 2021</span>
                                    <h4>Valentine outreach in Lagos state</h4>
                                    <p>
                                        Lets come together and eradicate once and for all from our communities...
                                    </p>
                                </div>
                            </div>
                            <div className='more-val'>
                                <p>
                                    MORE EVENTS
                                    <img src={ArrowRight} alt='poster' />
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='gallery'>
                    <div className='gallery-header'>
                        <h2>Our Gallery</h2>
                        <p>
                            VIEW ALL PHOTOS
                            <img src={ArrowRightBlack} alt='poster' />
                        </p>
                    </div>
                    <div className='gallery-grid'>
                        <div id='galleryf'>
                            <div className='galleryf-overlay'>
                                <div className='galleryf-overlay-content'>
                                <span>13 AUG, 2020</span>
                                <h5>Construction of School</h5>
                                <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa.
                                </p>
                                </div>
                               
                            </div>
                        </div>
                        <div>
                            <ul>
                                <li id='gallerys'>

                                </li>
                                <li id='galleryt'>

                                </li>
                                <li id='galleryfr'>

                                </li>
                                <li id='galleryfi'>

                                </li>
                            </ul>
                        </div>

                    </div>
                </section>
                <section className='projects-container'>
                <div className='projects-header'>
                        <h2>Projects Highlights</h2>
                        <p>
                            LEARN MORE
                            <img src={ArrowRight} alt='poster' />
                        </p>
                    </div>
                    <div className='projects-grid'>
                        <div className='projects-card'>
                            <div>
                                <img src={Val} alt='poster'/>
                            </div>
                            <div>
                                <h4>Construction of School</h4>
                                <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa. 
                                </p>
                            </div>
                        </div>
                        <div className='projects-card'>
                            <div>
                                <img src={Val} alt='poster'/>
                            </div>
                            <div>
                                <h4>Construction of School</h4>
                                <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa. 
                                </p>
                            </div>
                        </div>
                        <div className='projects-card'>
                            <div>
                                <img src={Val} alt='poster'/>
                            </div>
                            <div>
                                <h4>Construction of School</h4>
                                <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa. 
                                </p>
                            </div>
                        </div>
                        <div className='projects-card'>
                            <div>
                                <img src={Val} alt='poster'/>
                            </div>
                            <div>
                                <h4>Construction of School</h4>
                                <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa. 
                                </p>
                            </div>
                        </div>
                      
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}

export { Home }