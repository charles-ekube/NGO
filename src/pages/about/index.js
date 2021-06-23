import React from 'react';
import './style.css';
import { Navbar, Footer, JoinUs } from '../../components';
import { WhoWeAre } from '../../assets';


const AboutUs = () => {

    return (
        <>
        <Navbar />
            <main>
            <section className='about-intro-container'>
                    <div className='about-intro-overlay'>
                        <div className='about-overlay-text'>
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
               <section className='about-intro-article'>
                   <article>
                       <p>
                       Sanctuary of hope foundation (SOHCF) was birthed in need to reach out to. 
                       A need to touch the nation starting with children, 
                       A need to affect our generation for good. We are reaching out, 
                       Reaching out to children and people who have lost hope. People and children without food ,water.. 
                       children who cant afford education and people who might not have homes.
                       </p>
                   </article>
               </section>
               <section className='who-we-are-container'>
                    <div>
                        <img src={WhoWeAre} alt='poster'/>
                    </div>
                    <article>
                        <h2>Who we are</h2>
                        <p>
                        We are a group of young people with passion for service, 
                        who want to feed starving children, empower individuals, 
                        build homes for the homeless and less opportune, visit IDP camps,
                         Provide amenities and change the world in our own little way. 
                         We wanted to be a solace, always wanted to be a sanctuary,
                          share love and be a source of hope. We are a group of young individuals who make up the NGO, 
                          We are all Volunteers, we are a sanctuary of hope , we are a sanctuary of hope charity foundation. 
                        We bring an offering that only hearts can give.
                        </p>
                    </article>
               </section>
            </main>
            <Footer />
        </>
    )
}

export {AboutUs}