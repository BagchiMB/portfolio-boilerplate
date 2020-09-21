import React from 'react';
import './heading.scss'

const heading = ({text}) => {
    return (
        <div className="section-heading">
            <h2>{text}</h2>
        </div>
    );
};

export default heading;