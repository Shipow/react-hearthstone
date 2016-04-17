import React, {PropTypes} from 'react';
import './CardGalleryItem.css';

const CardGalleryItem = props =>
  <li className={'hs-CardGalleryItem' + (props.rarity ? ' hs-CardGalleryItem_' + props.rarity.toLowerCase() : '')} onClick={props.onClick}>
    <img className="hs-CardGalleryItem__image" src={props.imageUrl} />
  </li>

CardGalleryItem.propTypes = {
  rarity: PropTypes.string,
  imageUrl: PropTypes.string
};

export default CardGalleryItem;
