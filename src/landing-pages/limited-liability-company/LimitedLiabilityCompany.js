import React from 'react'
import LandingPagesHeader from '../../common/LandingPagesHeader'
import BackgroundImage from '../../components/BackgroundImage'

function LimitedLiabilityCompany() {
    return (
        <div>
            <BackgroundImage imageUrl={'/assets/limited-liability-company-bg.png'} />
            <LandingPagesHeader companyType = {'Limited Liability Company'} />
        </div>
    )
}

export default LimitedLiabilityCompany
