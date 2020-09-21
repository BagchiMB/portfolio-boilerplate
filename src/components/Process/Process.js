import React from 'react';
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import './Proces.scss'
import Heading from '../utils/heading'

const Process = () => {

    return (
        <section className="Process">
            <Heading text="Process" />
        </section>
    );
};

export default Process;