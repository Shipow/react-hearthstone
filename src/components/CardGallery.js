import React, {Component, PropTypes} from 'react';
import CardGalleryItem from './CardGalleryItem';

export default class CardGallery extends Component {
  render() {
    return (
      <ul className="hs-CardGallery">
        {this.props.cards.map(card => <CardGalleryItem key={card.id} {...card} />)}
      </ul>
    );
  }
}

CardGallery.propTypes = {
  cards: PropTypes.array
};
