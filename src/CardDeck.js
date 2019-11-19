const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

const suits = ['D', 'S', 'C', 'H'];


class CardDeck {

    cards = [];

    constructor() {
        for (const rank of ranks) {
            for (const suit of suits) {
                this.cards.push({ rank, suit })
            }
        }
    }

    getCard = () => {
        let card = Math.floor(Math.random() * this.cards.length);
        return this.cards.splice(card, 1);
    };

    getCards = howMany => {
        const cards = [];

        for (let i = 0; i < howMany; i++) {
            cards.push(this.getCard()[0]);
        }
        return cards;
    }
}

export default CardDeck;