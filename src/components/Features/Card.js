import React from 'react';
import './Card.scss'

const Card = ({img,head}) => {
    return (
        <section className="Feature-Card">
            <div className="Circle">
                <img src={img} alt={head} />
            </div>
            <h2>{head}</h2>
            <p>Download our app from the App or Google Play Store and register for free within minutes</p>
        </section>
    );
};

export default Card;