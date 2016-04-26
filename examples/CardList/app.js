import { render } from 'react-dom';
import $ from 'jquery';
import { CardList } from 'react-hearthstone';

$.get("https://api.hearthstonejson.com/v1/latest/enUS/cards.collectible.json", function(cards) {
  function createRandomDeck(cards) {
    var DECK_SIZE = 30;
    var SAME_CARD_LIMIT = 2;
    var PLAYER_CLASSES = ['DRUID', 'HUNTER', 'MAGE', 'PALADIN', 'PRIEST', 'ROGUE', 'SHAMAN', 'WARLOCK', 'WARRIOR'];
    var playerClass = PLAYER_CLASSES[Math.floor(Math.random() * PLAYER_CLASSES.length)];
    
    console.log('Creating deck for class ' + playerClass);

    var validCards = cards.filter(function(card) {
      return !card.playerClass || card.playerClass == playerClass;
    });

    // make sure there are enough cards to avoid an infinite loop
    if (validCards.length < DECK_SIZE) return;

    var deck = [];
    var cardIds = [];
    var numCards = 0;

    while (numCards < DECK_SIZE) {
      var randomCard = validCards[Math.floor(Math.random() * validCards.length)];

      // don't include same card twice
      if (cardIds.indexOf(randomCard.id) >= 0) continue;

      // legendaries are unique
      if (deck.length < DECK_SIZE && randomCard.rarity != 'LEGENDARY') {
        var count = 1;

        for (var i = 0; i < Math.floor(Math.random() * SAME_CARD_LIMIT); i++) {
          count += 1;
          deck.push(randomCard);
        }
      }

      deck.push(randomCard);
      cardIds.push(randomCard.id);
      numCards += count;
    }

    return deck;
  }

  function addImageUrlToCard(card) {
    var CARD_IMAGES_URL_ROOT = 'http://wow.zamimg.com/images/hearthstone/cards/enus/medium/';
    var CARD_IMAGES_EXTENSION = '.png';
    card.imageUrl = CARD_IMAGES_URL_ROOT + card.id + CARD_IMAGES_EXTENSION;
  }

  var deck = createRandomDeck(cards);
  deck.forEach(addImageUrlToCard);

  render(<CardList cards={deck} />, document.getElementById('example'));
});