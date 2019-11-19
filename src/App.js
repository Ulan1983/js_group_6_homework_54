import React, { Component } from 'react';
import './App.css';
import './cards/cards.css';
import Card from './components/Cards/Card';
import CardDeck from './CardDeck';
import PokerHand from './components/PokerHand/PokerHand';

class App extends Component {
    state = {
        cards: new CardDeck(),
        pokerHand: [],
        result: ''
    };

    getCards = () => {
        const pokerHand = this.state.cards.getCards(5);
        const result = this.getPokerHand(pokerHand);
        this.setState({ pokerHand, result })
    };

    getPokerHand = pokerhand => {
        const pokerHand = new PokerHand();
        return pokerHand.checkHand(pokerhand);
    }

    render() {
        return (
            <div className="App">
                <button onClick={this.getCards}>Get cards</button>
                <div className="playingCards faceImages">
                    {this.state.pokerHand.map((card, key) =>
                        <Card
                            key={key}
                            suit={card.suit}
                            rank={card.rank}
                        />)}
                    <div>{this.state.result}</div>
                </div>
            </div>
        );
    }
}

export default App;