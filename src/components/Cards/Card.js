import React from 'react';

const suits = {
    'D': 'diams',
    'H': 'hearts',
    'S': 'spades',
    'C': 'clubs'
};

const showSuit = {
    'D': '♦',
    'H': '♥',
    'S': '♠',
    'C': '♣'
};

const Card = props => {
    let className = `card rank-${props.rank.toLowerCase()} ${suits[props.suit]}`;
    return (
        <div className={className}>
            <span className="rank">{props.rank}</span>
            <span className="suit">{showSuit[props.suit]}</span>
        </div>
    );
};

export default Card;