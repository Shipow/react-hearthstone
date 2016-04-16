import React from 'react';
import './CardListItem.css';

const CardListItem = (props) => 
  <li className={'hs-CardListItem' + (props.rarity ? ' hs-CardListItem_' + props.rarity.toLowerCase() : '')}>
    <div className="hs-CardListItem__image" style={{backgroundImage: 'url(' + props.imageUrl + ')'}} />
    <div className="hs-CardListItem__content">
      <div className="hs-CardListItem__cost">{props.cost}</div>
      <div className="hs-CardListItem__name">{props.name}</div>
      {props.count && props.count > 1 ? <div className="hs-CardListItem__count">{props.count}</div> : null}
    </div>
  </li>

export default CardListItem;
