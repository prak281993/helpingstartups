import React from 'react'
import LandingPagesHeader from '../../common/LandingPagesHeader'
import BackgroundImage from '../../components/BackgroundImage'

function SectionEight() {
    return (
        <div>
            <BackgroundImage imageUrl={'/assets/section-eight-company.jpg'} />
            <LandingPagesHeader companyType = {'Section 8 Company'} />
        </div>
    )
}

export default SectionEight
