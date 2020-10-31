import React from 'react';
import './SectionEightContent.scss';
import SectionEightDetails from './SectionEightDetails';
import SectionEightPackages from './SectionEightPackages';

function SectionEightContent() {
    return (
        <main>
            <SectionEightPackages />
            <SectionEightDetails />
        </main>
    )
}

export default SectionEightContent
