import React, {Component, PropTypes} from 'react';
import CardGalleryItem from './CardGalleryItem';
import './CardGallery.css';

export default class CardGallery extends Component {
  render() {
    return (
      <ul className="hs-CardGallery">
        {this.props.cards.map(
          card => <CardGalleryItem key={card.id} {...card} onClick={this.props.onClick ? this.props.onClick.bind(this, card) : null} />
        )}
      </ul>
    );
  }
}

CardGallery.propTypes = {
  cards: PropTypes.array.isRequired,
  onClick: PropTypes.func
};
