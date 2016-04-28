import React, {Component, PropTypes} from 'react';
import LazyLoad from 'react-lazyload';
import CardGalleryItem from './CardGalleryItem';
import CardGalleryPlaceholderItem from './CardGalleryPlaceholderItem';
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
        {sortedCards.map(card => {
          const placeholder = <CardGalleryItem card={card} invisible onClick={this.props.onClick ? this.props.onClick.bind(this, card) : null} />

          return (
            <LazyLoad key={card.id} overflow once debounce={300} height={303} placeholder={placeholder}>
              <CardGalleryItem card={card} onClick={this.props.onClick ? this.props.onClick.bind(this, card) : null} />
            </LazyLoad>
          );
        })}
      </ul>
    );
  }
}

CardGallery.propTypes = {
  cards: PropTypes.array.isRequired,
  onClick: PropTypes.func
};
