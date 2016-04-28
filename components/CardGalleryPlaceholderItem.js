import React, {PropTypes} from 'react';
import './CardGalleryPlaceholderItem.css';

const CardGalleryPlaceholderItem = props =>
  <div className="hs-CardGalleryPlaceholderItem">
    <div className="hs-CardGalleryPlaceholderItem__content">
      <div className="hs-CardGalleryPlaceholderItem__name">{props.card.name}</div>
    </div>
  </div>

CardGalleryPlaceholderItem.propTypes = {
  card: PropTypes.shape({
    name: PropTypes.string.isRequired
  })
};

export default CardGalleryPlaceholderItem;
