function GameDeck({ deck }: { deck: string[] }) {
    let cardsDeck = deck.sort(() => Math.random() - 0.5).slice(-9);
    return cardsDeck;
}

// module.exports = { GameDeck };

export default GameDeck;
