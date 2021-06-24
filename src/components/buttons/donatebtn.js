import React from 'react';
import './style.css';


const DonateBtn = ({border_color, text_color}) => {

    return(
        <>
            <button className='donate-btn' style={{borderColor:border_color, color:text_color}}>
                Donate Now
            </button>
        </>
    )
}

export {DonateBtn}