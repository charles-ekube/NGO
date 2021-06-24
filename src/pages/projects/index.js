import React from 'react';
import { JoinUsHero, Val } from '../../assets';
import { Navbar, Footer, JoinUs } from '../../components';
import './style.css';


const Projects = () => {

    return (
        <>
            <Navbar/>
            <main>
            <section className='projects-intro-container'>
                    <div className='projects-intro-overlay'>
                        <div className='projects-overlay-text'>
                            <h2>
                                We have accomplished a lot and enriched lives.
                            </h2>
                            <p>
                                Lets come together and eradicate poverty and hunger once and for all from our communities
                            </p>
                            <button>Donate</button>
                        </div>
                    </div>
                </section>
                <section className='projects-page-grid'>
                    <ul>
                        <li>
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
                        </li>
                        <li>
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
                        </li>
                        <li>
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
                        </li>
                        <li>
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
                        </li>
                        <li>
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
                        </li>
                        <li>
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
                        </li>
                        <li>
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
                        </li>
                        <li>
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
                        </li>
                        <li>
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
                        </li>
                        <li>
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
                        </li>
                        <li>
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
                        </li>
                        <li>
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
                        </li>
                    </ul>
                    <div className='show-more-container'>
                        <button>
                            Show More
                        </button>
                    </div>
                </section>
                <section>
                    <JoinUs bgImg={JoinUsHero}/>
                </section>
            </main>
            <Footer/>
        </>
    )
}

export {Projects}