import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import CardList from '../src/components/CardList';
import collectibleCards from './hearthstonejson/cards.collectible.json';

describe('CardList', function() {
  it('renders a list of cards', function() {
    const cards = collectibleCards.slice(0, 2);
    const wrapper = shallow(<CardList cards={cards} />);
    expect(wrapper.hasClass('hs-CardList')).to.be.true;
    expect(wrapper.children()).to.have.length(cards.length);
  });
  
  it('renders duplicate cards as single items', function() {
    const cards = [ collectibleCards[0], collectibleCards[0] ];
    const wrapper = shallow(<CardList cards={cards} />);
    expect(wrapper.children()).to.have.length(1);
  });

  it('is sorted by mana cost', function() {
    const cards = [
      { id: 'firstCard', name: 'Card that costs 2', cost: 2 },
      { id: 'secondCard', name: 'Card that costs 1', cost: 1 }
    ];
    const wrapper = shallow(<CardList cards={cards} />);
    expect(wrapper.childAt(0).prop('cost') == cards[1].cost);
    expect(wrapper.childAt(1).prop('cost') == cards[0].cost);
  });
});
