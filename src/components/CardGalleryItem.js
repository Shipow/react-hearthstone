import React, {PropTypes} from 'react';
import './CardGalleryItem.css';

const CardGalleryItem = props =>
  <li className={'hs-CardGalleryItem' + (props.card.rarity ? ' hs-CardGalleryItem_' + props.card.rarity.toLowerCase() : '')} onClick={props.onClick}>
    <img className="hs-CardGalleryItem__image" src={props.card.imageUrl} />
  </li>

CardGalleryItem.propTypes = {
  card: PropTypes.shape({
    rarity: PropTypes.string,
    imageUrl: PropTypes.string,
    cost: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired
  })
};

export default CardGalleryItem;
