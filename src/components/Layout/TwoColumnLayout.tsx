import React from 'react';
import './TwoColumnLayout.css';

const TwoColumnLayout = ({ left, right }: { left: React.ReactNode, right: React.ReactNode }) => {
    return (
        <div className="container">
            <div className="left-column">{left}</div>
            <div className="right-column">{right}</div>
        </div>
    );
};

export default TwoColumnLayout;
