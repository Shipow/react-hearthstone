import React, {Component, PropTypes} from 'react';
import CardListItem from './CardListItem';
import './CardList.css';

export default class CardList extends Component {
  render() {
    function sortByCostAndName(a, b) {
      if (a.cost == b.cost) {
        return a.name.localeCompare(b.name);
      }
      return a.cost - b.cost;
    }

    const cards = this.props.cards.sort(sortByCostAndName);

    return (
      <ul className="hs-CardList">
        {cards.map((card) => <CardListItem key={card.id} {...card} />)}
      </ul>
    );
  }
}

CardList.propTypes = {
  cards: PropTypes.array
};
