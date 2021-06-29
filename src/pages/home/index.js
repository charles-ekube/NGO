import React from "react";
import "./style.css";
import { Navbar, Footer, JoinUs, Card, DonateBtn } from "../../components";
import {
  ArrowRight,
  Val,
  Valentine,
  ArrowRightBlack,
  JoinHero,
  GalleryF,
  GalleryS,
  GalleryT,
  GalleryFR,
  GalleryFI,
} from "../../assets";
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <Navbar />
      <main>
        <section className="intro-container">
          <div className="intro-overlay">
            <div className="overlay-text">
              <h2>Let's make it happen, one child at a time</h2>
              <p>
                Lets come together and eradicate poverty and hunger once and for
                all from our communities
              </p>
              <div className='donate-btn-container'>
                <DonateBtn border_color="#fff" text_color="#027DC3" bgColor='#fff'/>
              </div>
            </div>
          </div>
        </section>
        <section className='intro-overlay-offset'>
        
              <div className="valentine-post">
                <img src={Valentine} alt="poster" />
                <div>
                  <span>12 FEB 2021</span>
                  <h4>Valentine outreach in Lagos state</h4>
                  <p>
                    Lets come together and eradicate once and for all from our
                    communities...
                  </p>
                </div>
              </div>
              <div className="valentine-post">
                <img src={Val} alt="poster" />
                <div>
                  <span>12 FEB 2021</span>
                  <h4>Valentine outreach in Lagos state</h4>
                  <p>
                    Lets come together and eradicate once and for all from our
                    communities...
                  </p>
                </div>
              </div>
              <div className="more-val">
                <p>
                  MORE EVENTS
                  <img src={ArrowRight} alt="poster" />
                </p>
              </div>
        </section>
         <section className="gallery">
          <div className="gallery-header">
            <h2>Our Gallery</h2>
            <Link to='/gallery'>
              VIEW ALL PHOTOS
              <img src={ArrowRightBlack} alt="poster" />
            </Link>
          </div>
          <div className="gallery-grid">
            <ul>
              <li id="galleryf">
                <img src={GalleryF} alt="poster" />
                <div className="galleryf-overlay">
                  <div className="galleryf-overlay-content">
                    <span>13 AUG, 2020</span>
                    <h5>Construction of School</h5>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Massa.
                    </p>
                  </div>
                </div>
              </li>
              <li id="gallerys">
                <img src={GalleryS} alt="poster" />
              </li>
              <li id="galleryt">
                <img src={GalleryT} alt="poster" />
              </li>
              <li id="galleryfr">
                <img src={GalleryFR} alt="poster" />
              </li>
              <li id="galleryfi">
                <img src={GalleryFI} alt="poster" />
              </li>
            </ul>
          </div>
        </section>
        <section className="projects-container">
          <div className="projects-header">
            <h2>Projects Highlights</h2>
            <Link to='/projects'>
              LEARN MORE
              <img src={ArrowRight} alt="poster" />
            </Link>
          </div>
          <div className="projects-grid">
              <Card/>
              <Card/>
              <Card/>
              <Card/>
           </div>
        </section>
        <section>
          <JoinUs bgImg={JoinHero} />
        </section>
      </main>
      {/* <Footer />  */}
    </>
  );
};

export { Home };
