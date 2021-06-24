import React from "react";
import "./style.css";
import { Navbar, Footer, JoinUs } from "../../components";
import { Call, JoinUsHero, Location, Mail } from "../../assets";

const Contact = () => {
  return (
    <>
      <Navbar />
      <main>
        <section className="contact-intro-container">
          <div className="contact-intro-overlay">
            <div className="contact-overlay-text">
              <h2>Want to talk? No problem, shoot us a mail today.</h2>
              <p>
                Lets come together and eradicate poverty and hunger once and for
                all from our communities
              </p>
            </div>
          </div>
        </section>
        <section className="contact-grid">
          <div className="contact-links">
            <h2>Contact Us</h2>
            <ul>
              <li>
                <img src={Location} alt="icon" />
                <address>
                  Sanctuary of God Avenue, Apo Resettlement, Zone B, Abuja
                </address>
              </li>
              <li>
                <img src={Call} alt="icon" />
                <span>+234 816 564 1972, +234 812 176 8832</span>
              </li>
              <li>
                <img src={Mail} alt="icon" />
                <span>info@sohcf.org</span>
              </li>
            </ul>
          </div>
          <div>
            <div className="contact-form-container">
              <h2>Send us a message</h2>
              <form>
                <div className="form-group">
                  <label>Email</label>
                  <input type="email" placeholder="Your email address" />
                </div>
                <div className="form-group">
                  <label>Subject</label>
                  <input type="text" placeholder="Message topic" />
                </div>
                <div className="form-group">
                  <label>Message</label>
                  <textarea></textarea>
                </div>
                <button>SEND</button>
              </form>
            </div>
          </div>
        </section>
        <section>
            <JoinUs bgImg={JoinUsHero} />
        </section>
      </main>
      <Footer />
    </>
  );
};

export { Contact };
