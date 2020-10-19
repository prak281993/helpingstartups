import React from 'react';
import BackgroundImage from './BackgroundImage';
import PrivateLimitedContent from './PrivateLimitedContent';
import PrivateLimitedHeader from './PrivateLimitedHeader';

function PrivateLimited() {
    return (
        <div>
            <BackgroundImage />
            <PrivateLimitedHeader />
            <PrivateLimitedContent />
        </div>
    )
}

export default PrivateLimited
