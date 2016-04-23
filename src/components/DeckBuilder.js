import React, {Component, PropTypes} from 'react';
import $ from 'jquery';
import CardGallery from './CardGallery';
import CardList from './CardList';
import './DeckBuilder.css';

export default class DeckBuilder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [],
      deck: []
    };
    this.addCardToDeck = this.addCardToDeck.bind(this);
  }
  componentDidMount() {
    $.get('https://api.hearthstonejson.com/v1/latest/enUS/cards.collectible.json', function(cards) {
      cards.forEach(function(card) {
        card.imageUrl = 'http://wow.zamimg.com/images/hearthstone/cards/enus/medium/' + card.id + '.png';
      });
      this.setState({ cards: cards });
    }.bind(this));
  }
  addCardToDeck(card) {
    this.setState({ deck: this.state.deck.concat(card) });
  }
  render() {
    return (
      <div className="hs-DeckBuilder">
        <div className="hs-DeckBuilder__collection">
          <CardGallery cards={this.state.cards.slice(0,30)} onClick={this.addCardToDeck} />
        </div>
        <div className="hs-DeckBuilder__deck">
          <CardList cards={this.state.deck} />
        </div>
      </div>
    );
  }
}
