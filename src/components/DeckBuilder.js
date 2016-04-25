import React, {Component, PropTypes} from 'react';
import $ from 'jquery';
import CardGallery from './CardGallery';
import CardList from './CardList';
import './DeckBuilder.css';

function capitalize(str) {
  if (!str) return str;
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export default class DeckBuilder extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cards: [],
      deck: [],
      showClassCards: true
    };
    this.addCardToDeck = this.addCardToDeck.bind(this);
    this.removeCardFromDeck = this.removeCardFromDeck.bind(this);
    this.showClassCards = this.showClassCards.bind(this);
    this.showNeutralCards = this.showNeutralCards.bind(this);
  }
  componentDidMount() {
    this.serverRequest = $.get('https://api.hearthstonejson.com/v1/latest/enUS/cards.collectible.json', function(cards) {
      cards.forEach(function(card) {
        card.imageUrl = 'http://wow.zamimg.com/images/hearthstone/cards/enus/medium/' + card.id + '.png';
      });

      this.setState({ cards: cards });
    }.bind(this));
  }
  componentWillUmount() {
    this.serverRequest.abort();
  }
  addCardToDeck(card) {
    if (this.state.deck.length >= this.props.deckSize) return;

    if (card.rarity) {
      let duplicates = this.state.deck.filter(deckCard => deckCard.id == card.id);
      if (duplicates.length >= this.props.deckLimits[card.rarity]) return;
    }

    this.setState({ deck: this.state.deck.concat(card) });
  }
  removeCardFromDeck(card) {
    const cardId = card.id;
    let found = false;

    // remove first occurence of the card
    const deck = this.state.deck.filter(function(card, index) {
      if (!found && card.id == cardId) {
        found = true;
        return false;
      }
      return true;
    });

    this.setState({ deck: deck });
  }
  showClassCards() {
    this.setState({ showClassCards: true });
  }
  showNeutralCards() {
    this.setState({ showClassCards: false });
  }
  getVisibleCards() {
    let cards = this.state.cards;

    cards = cards.filter(card => card.type == 'MINION' || card.type == 'SPELL' || card.type == 'WEAPON');

    if (this.state.showClassCards) {
      cards = cards.filter(card => this.props.playerClass == card.playerClass);
    } else {
      cards = cards.filter(card => card.playerClass == null);
    }

    return cards;
  }
  render() {
    const visibleCards = this.getVisibleCards();
    
    return (
      <div className="hs-DeckBuilder">
        <div className="hs-DeckBuilder__header">
          <div className="hs-DeckBuilder__pages">
            <a className="hs-DeckBuilder__filter-player-class" onClick={this.showClassCards}>{capitalize(this.props.playerClass.toLowerCase())}</a>
            <a className="hs-DeckBuilder__filter-neutral" onClick={this.showNeutralCards}>Neutral</a>
          </div>
        </div>
        <div className="hs-DeckBuilder__collection">
          <CardGallery cards={visibleCards} onClick={this.addCardToDeck} />
        </div>
        <div className="hs-DeckBuilder__deck">
          <CardList cards={this.state.deck} onClick={this.removeCardFromDeck} />
        </div>
      </div>
    );
  }
}

DeckBuilder.propTypes = {
  playerClass: PropTypes.string.isRequired,
  deckSize: PropTypes.number.isRequired,
  deckLimits: PropTypes.shape({
    FREE: PropTypes.number.isRequired,
    COMMON: PropTypes.number.isRequired,
    RARE: PropTypes.number.isRequired,
    EPIC: PropTypes.number.isRequired,
    LEGENDARY: PropTypes.number.isRequired
  })
};

DeckBuilder.defaultProps = {
  deckSize: 30,
  deckLimits: {
    FREE: 2,
    COMMON: 2,
    RARE: 2,
    EPIC: 2,
    LEGENDARY: 1
  }
};
