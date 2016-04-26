import React, {PropTypes} from 'react';
import './CardListItem.css';

const CardListItem = (props) => 
  <li className={'hs-CardListItem' + (props.card.rarity ? ' hs-CardListItem_' + props.card.rarity.toLowerCase() : '')} onClick={props.onClick}>
    <div className="hs-CardListItem__image" style={{backgroundImage: 'url(' + props.card.imageUrl + ')'}} />
    <div className="hs-CardListItem__content">
      <div className="hs-CardListItem__cost">{props.card.cost}</div>
      <div className="hs-CardListItem__name">{props.card.name}</div>
      {props.count && props.count > 1 ? <div className="hs-CardListItem__count">{props.count}</div> : null}
    </div>
  </li>

CardListItem.propTypes = {
  card: PropTypes.shape({
    rarity: PropTypes.string,
    imageUrl: PropTypes.string,
    cost: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired
  }),
  count: PropTypes.number
};

export default CardListItem;
