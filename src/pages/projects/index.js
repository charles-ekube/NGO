import React from 'react';
import { Link } from 'react-router-dom';
import { JoinUsHero, Val } from '../../assets';
import { Navbar, Footer, JoinUs, ShowMoreBtn, Card } from '../../components';
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
                        </div>
                    </div>
                </section>
                <section className='projects-page-grid'>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <div className='show-more-container'>
                        <ShowMoreBtn/>
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