import { render } from 'react-dom';
import $ from 'jquery';
import { CardGallery } from 'react-hearthstone';

$.get("https://api.hearthstonejson.com/v1/latest/enUS/cards.collectible.json", function(cards) {
  var NUM_CARDS = 30;
  var selection = [];

  for (var i = 0; i < NUM_CARDS; i++) {
    selection.push(cards[Math.floor(Math.random() * cards.length)]);
  }

  selection.forEach(addImageUrlToCard);

  function addImageUrlToCard(card) {
    var CARD_IMAGES_URL_ROOT = 'http://wow.zamimg.com/images/hearthstone/cards/enus/medium/';
    var CARD_IMAGES_EXTENSION = '.png';
    card.imageUrl = CARD_IMAGES_URL_ROOT + card.id + CARD_IMAGES_EXTENSION;
  }

  render(<CardGallery cards={selection} />, document.getElementById('example'));
});
