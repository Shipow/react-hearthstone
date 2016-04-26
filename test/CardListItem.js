import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import CardListItem from '../components/CardListItem';
import collectibleCards from './hearthstonejson/cards.collectible.json';

describe('CardListItem', function() {
  it('renders', function() {
    const card = collectibleCards[0];
    const wrapper = shallow(<CardListItem card={card} />);
    expect(wrapper.hasClass('hs-CardListItem')).to.be.true;
  });

  it('renders the card\'s rarity', function() {
    const card = collectibleCards[0];
    const wrapper = shallow(<CardListItem card={card} />);
    expect(wrapper.hasClass('hs-CardListItem_' + card.rarity.toLowerCase())).to.be.true;
  });
});
