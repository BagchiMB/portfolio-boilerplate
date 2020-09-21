import React from 'react';
import './Card.scss'

const Card = ({img,name,job,Des}) => {
    return (
        <div className="Card">
            <div className="img-container"><img src={img} alt={name} /></div>
            <h3>{name}</h3>
            <p>{job}</p>
            <p>{Des}</p>
        </div>
    );
};

export default Card;