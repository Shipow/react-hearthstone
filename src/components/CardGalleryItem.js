import React from 'react';

const CardGalleryItem = props =>
  <li className={'hs-CardGalleryItem' + (props.rarity ? ' hs-CardListItem_' + props.rarity.toLowerCase() : '')}>
    <img className="hs-CardGalleryItem__image" src={props.imageUrl} />
  </li>

export default CardGalleryItem;
