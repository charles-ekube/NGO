import React from 'react';
import './style.css';
import { Navbar , Footer, JoinUs} from '../../components';
import { F, G, GalleryF, GalleryFI, GalleryFR, GalleryS, GalleryT, J, K, L, M, H, I, JoinUsHero } from '../../assets';


const Gallery = () => {

    return (
        <>
            <Navbar/>
            <main>
            <section className='gallery-intro-container'>
                    <div className='gallery-intro-overlay'>
                        <div className='gallery-overlay-text'>
                            <h2>
                                Let's come together and eradicate poverty.
                            </h2>
                            <p>
                                Lets come together and eradicate poverty and hunger once and for all from our communities
                            </p>
                            <button>Donate</button>
                        </div>
                    </div>
                </section>
                <section className='gallery-page-grid'>
                    <ul>
                        <li id='gallerya'>
                            <img src={GalleryF} alt='poster'/>
                        </li>
                        <li id='galleryb'>
                            <img src={GalleryS} alt='poster'/>
                        </li>
                        <li id='galleryc'>
                            <img src={GalleryT} alt='poster'/>
                        </li>
                        <li id='galleryd'>
                            <img src={GalleryFR} alt='poster'/>
                        </li>
                        <li id='gallerye'>
                            <img src={GalleryFI} alt='poster'/>
                        </li>
                        <li id='galleryff'>
                            <img src={F} alt='poster'/>
                        </li>
                        <li id='galleryg'>
                            <img src={G} alt='poster'/>
                        </li>
                        <li id='galleryh'>
                            <img src={H} alt='poster'/>
                        </li>
                        <li id='galleryi'>
                            <img src={I} alt='poster'/>
                        </li>
                        <li id='galleryj'>
                            <img src={J} alt='poster'/>
                        </li>
                        <li id='galleryk'>
                            <img src={K} alt='poster'/>
                        </li>
                        <li id='galleryl'>
                            <img src={L} alt='poster'/>
                        </li>
                        <li id='gallerym'>
                            <img src={M} alt='poster'/>
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


export {Gallery}