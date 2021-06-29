import React from 'react';
import './style.css';


const NavToggle = ({handleToggle}) => {

    

        return (
            <button className='nav-toggle-btn' onClick={handleToggle}>
                <span></span>
                <span></span>
                <span></span>
            </button>
        )
}

export {NavToggle}