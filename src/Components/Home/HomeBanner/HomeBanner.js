import React from 'react';
import './HomeBanner.css';
import 'tachyons';

export const HomeBanner = () => {
    return (
        <div>
             <div className='home-baner flex flex-column justify-center items-start ph6 '>
                <span className='white helvetica' style={{fontSize:'3.5rem'}}>Welcome to the world of astrology</span>
                <p className='white f3 helvetica' style={{fontSize:'2rem'}}>~ By Ankita Sarnot</p>
            </div>
            
        </div>
    )
}
