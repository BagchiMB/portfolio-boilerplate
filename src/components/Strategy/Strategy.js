import React from 'react';
import './Strategy.scss'

import Heading from '../utils/heading'

import DS from './Digital/Digital'
import ES from './Experience/Experience'

const Strategy = () => {
    return (
        <section className="Strategy">
            <Heading text="Strategy" />
            <DS />
            <ES />
        </section>
    );
};

export default Strategy;