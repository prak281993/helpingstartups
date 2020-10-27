import React from 'react';
import LandingPagesHeader from '../../common/LandingPagesHeader';
import BackgroundImage from '../../components/BackgroundImage';

function OnePersonCompany() {
    return (
        <div>
            <BackgroundImage imageUrl={'/assets/one-person-company-bg.jpg'} />
            <LandingPagesHeader companyType={'One Person Company'} />
        </div>
    )
}

export default OnePersonCompany
