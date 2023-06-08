import GameDeck from '../src/modules/deck';

describe('should count the number of cards in the deck', () => {
    it('should be 9 cards', () => {
        const expected = 9;

        const result = GameDeck().length;

        expect(result).toBe(expected);
    });
});
