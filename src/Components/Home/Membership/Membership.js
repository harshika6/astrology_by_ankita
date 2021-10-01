import React from 'react';
import logo from './membership_img.png'

const Membership = () => {
    return (
        <div className="pa4 flex flex-wrap justify-center items-center" style={{ height: 'auto', backgroundColor: '#1890ff' }}>
            <div className="flex flex-column items-start" style={{ width: '65%' }}>
                <h2 style={{fontSize:'2rem'}} className="white helvetica">Your Customized Cosmic Membership
                </h2>
                <p className="white tl f4 helvetica">Solutions to questions like match making, partnership analysis, complete horoscope analysis and much more</p>
                <button className=" f4 br2 ph3 pv2 mb2 dib shadow-5 btn grow pointer" style={{ border: 'none' }}>Book Now!</button>
            </div>
            <div style={{ width: '35%' }}>
                <img src={logo} height='50%' width='50%' />
            </div>
        </div>
    )
}

export default Membership;
