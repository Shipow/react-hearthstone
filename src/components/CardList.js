import React, {Component, PropTypes} from 'react';
import CardListItem from './CardListItem';
import './CardList.css';

export default class CardList extends Component {
  render() {
    const itemsById = {};

    this.props.cards.forEach(function(card) {
      if (!itemsById[card.id]) {
        itemsById[card.id] = {
          card: card,
          count: 0
        }
      }
      itemsById[card.id].count += 1;
    });

    const items = Object.keys(itemsById).map(function(cardId) {
      return itemsById[cardId];
    });

    const sortedItems = items.sort(function sortByCostAndName(a, b) {
      if (a.card.cost == b.card.cost) {
        return a.card.name.localeCompare(b.card.name);
      }
      return a.card.cost - b.card.cost;
    });

    return (
      <ul className="hs-CardList">
        {sortedItems.map((item) =>
          <CardListItem key={item.card.id} card={item.card} count={item.count} onClick={this.props.onClick ? this.props.onClick.bind(this, item.card) : null} />
        )}
      </ul>
    );
  }
}

CardList.propTypes = {
  cards: PropTypes.array
};
