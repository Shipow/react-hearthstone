import React, {Component, PropTypes} from 'react';
import CardGalleryItem from './CardGalleryItem';
import './CardGallery.css';

export default class CardGallery extends Component {
  render() {
    const sortedCards = this.props.cards.sort(function sortByCostAndName(a, b) {
      if (a.cost == b.cost) {
        return a.name.localeCompare(b.name);
      }
      return a.cost - b.cost;
    });

    return (
      <ul className="hs-CardGallery">
        {sortedCards.map(
          card => <CardGalleryItem key={card.id} card={card} onClick={this.props.onClick ? this.props.onClick.bind(this, card) : null} />
        )}
      </ul>
    );
  }
}

CardGallery.propTypes = {
  cards: PropTypes.array.isRequired,
  onClick: PropTypes.func
};
