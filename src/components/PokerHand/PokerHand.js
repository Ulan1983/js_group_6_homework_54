class PokerHand {
    constructor() {
        this.checkHand = (arrCard) => {
            let cardRank = [];
            let cardSuit = {
                'D': 0,
                'S': 0,
                'H': 0,
                'C': 0
            };
            for (let i = 0; i < arrCard.length; i++) {
                cardRank.push(arrCard[i].rank)
            }

            arrCard.forEach(card => cardSuit[card.suit]++);

            let arrFilterRank = cardRank.filter(function (elem, pos, arr) {
                return pos !== arr.indexOf(elem) || pos !== arr.lastIndexOf(elem);
            });

            if (Object.keys(cardSuit).filter(item => cardSuit[item] === 5).length) return 'Flash';
            if (Object.keys(cardSuit).filter(item => cardSuit[item] === 4).length) return 'Four of kinds';
            if (arrFilterRank.length === 5) return 'Full house';
            if (arrFilterRank.length === 4) return 'Two pairs';
            if (arrFilterRank.length === 3) return 'Set';
            if (arrFilterRank.length === 2) return 'Pair';
            if (arrFilterRank.length === 0) return 'No combinaton';
        }
    }
}
export default PokerHand;