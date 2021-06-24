import React from 'react';
import './style.css';
import {Logo} from '../../../assets';
import { DonateBtn } from '../../buttons';


const Navbar = () => {
    return (

        <>
            <header>
                <nav className='navbar'>
                    <div className="navbar-logo">
                        <img src={Logo} alt="logo" />
                    </div>
                    <ul className='navbar-links'>
                        <li>
                            Home
                        </li>
                        <li>
                            About Us
                        </li>
                        <li>
                            Gallery
                        </li>
                        <li>
                            Contact Us
                        </li>
                        <li>
                            <DonateBtn border_color='#027DC3' text_color='#027DC3'/>
                        </li>
                    </ul>
                </nav>
            </header>
        </>

    )
}

export {Navbar}