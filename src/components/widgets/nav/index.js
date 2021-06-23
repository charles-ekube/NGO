import React from 'react';
import './style.css';
import {Logo} from '../../../assets';


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
                            Donate
                        </li>
                    </ul>
                </nav>
            </header>
        </>

    )
}

export {Navbar}