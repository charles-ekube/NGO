import React from 'react';
import './style.css';
import {Logo, Copy, Facebook, Twitter, LinkedIn} from '../../../assets'


const Footer = () => {

    return (
        <>
            <section className="footer-container">
                <div className="footer-bio">
                    <img src={Logo} alt="logo"/>
                    <p>
                    Sanctuary of hope foundation (SOHCF) was birthed in need to reach out to. 
                    A need to touch the nation starting with children, A need to affect our generation for good. 
                    We are reaching out, Reaching out to children and people who have lost hope. People and children without food ,
                    water.. children who cant afford education and people who might not have homes.
                    </p>
                </div>
                <div className="footer-contact">
                    <h5>CONTACT</h5>
                    <address>
                    Sanctuary of God avenue Apo Ressetlement Zone B abuja
                    +234 816 564 1972, +234 812 176 8832
                    <br/>
                    <span>info@sohcf.org</span>
                    </address>
                </div>
                <div className='footer-newsletter'>
                    <h5>NEWSLETTER</h5>
                    <form>
                        <p>
                        Sign up to get our monthly highlights and projects
                        </p>
                        <label>
                            <input type="email" placeholder="Email"/>
                            <button>OK</button>
                        </label>
                    </form>
                </div>
                <div className='footer-social-links'>
                    <ul>
                        <li>
                            <img src={Facebook} alt="facebook"/>
                        </li>
                        <li>
                            <img src={Twitter} alt="twitter"/>
                        </li>
                        <li>
                            <img src={LinkedIn} alt="linkedin"/>
                        </li>
                    </ul>
                </div>
                <div className='footer-copy'>
                    <img src={Copy} alt='copy'/>
                    <p>
                    2020 Sanctuary of hope foundation. All Rights Reserved.
                    </p>
                </div>
                <div className='footer-quick-links'>
                    <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Gallery</li>
                        <li>Projects</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
            </section>
        </>
    )
}

export {Footer}