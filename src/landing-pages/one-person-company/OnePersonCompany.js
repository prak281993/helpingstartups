import React from 'react';
import FeedbackAndServices from '../../common/FeedbackAndServices';
import LandingPagesHeader from '../../common/LandingPagesHeader';
import BackgroundImage from '../../components/BackgroundImage';
import OnePersonCompanyContent from './OnePersonCompanyContent';

function OnePersonCompany() {
    return (
        <div>
            <BackgroundImage imageUrl={'/assets/one-person-company-bg.jpg'} />
            <LandingPagesHeader startingPrice='5,999' companyType={'One Person Company'} />
            <OnePersonCompanyContent />
            <FeedbackAndServices />
        </div>
    )
}

export default OnePersonCompany
