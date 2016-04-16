import React, {Component, PropTypes} from 'react';
import CardListItem from './CardListItem';
import './CardList.css';

export default class CardList extends Component {
  render() {
    return (
      <ul className="hs-CardList">
        {this.props.cards.map(function(card) {
          return <CardListItem key={card.id} {...card} />
        })}
      </ul>
    );
  }
}

CardList.propTypes = {
  cards: PropTypes.array
};
