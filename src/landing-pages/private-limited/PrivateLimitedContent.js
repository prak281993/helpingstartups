import React from 'react';
import PrivateLimitedDetails from './PrivateLimitedDetails';
import PrivateLimitedPackages from './PrivateLimitedPackages';
import "./PrivateLimitedContent.scss";

function PrivateLimitedContent() {
    return (
        <main>
           <PrivateLimitedPackages />
           <PrivateLimitedDetails />
        </main>
    )
}

export default PrivateLimitedContent
