import React from 'react';
import './style.css';


const DonateBtn = ({border_color, text_color, bgColor}) => {

    return(
        <>
            <button className='donate-btn' style={{borderColor:border_color, color:text_color, backgroundColor:bgColor}}>
                Donate Now
            </button>
        </>
    )
}

export {DonateBtn}