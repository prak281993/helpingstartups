import React from 'react';
import LandingPagesHeader from '../../common/LandingPagesHeader';
import BackgroundImage from '../../components/BackgroundImage';
import OnePersonCompanyContent from './OnePersonCompanyContent';

function OnePersonCompany() {
    return (
        <div>
            <BackgroundImage imageUrl={'/assets/one-person-company-bg.jpg'} />
            <LandingPagesHeader startingPrice='5,999' companyType={'One Person Company'} />
            <OnePersonCompanyContent />
        </div>
    )
}

export default OnePersonCompany
