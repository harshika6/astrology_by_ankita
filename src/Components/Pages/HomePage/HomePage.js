import React from 'react'
import AboutHer from '../../Home/AboutHer/AboutHer';
import { HomeBanner } from '../../Home/HomeBanner/HomeBanner';
import Membership from '../../Home/Membership/Membership';
import Methedology from '../../Home/Methedology/Methedology';
import Services from '../../Home/Services/Services';

const HomePage = () => {
    return (
        <div>
            <HomeBanner/>
            <AboutHer/>
            <Methedology/>
            <Services/>
            <Membership/>
        </div>
    )
}

export default HomePage;
