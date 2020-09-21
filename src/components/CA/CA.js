import React from 'react';
import Heading from '../utils/heading'
import './CA.scss'

import Challenge from './Challenge/Challenge'
import Approach from './Approach/Approach'

const CA = () => {
    return (
        <section className="CA">
            <Heading text="Challenge & Approach" />
            <Challenge />
            <Approach />
        </section>
    );
};

export default CA;