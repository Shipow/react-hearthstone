import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import DeckBuilder from '../src/components/DeckBuilder';
import collectibleCards from './hearthstonejson/cards.collectible.json';

describe('DeckBuilder', function() {
  it('renders', function() {
    const wrapper = shallow(<DeckBuilder />);
    expect(wrapper.hasClass('hs-DeckBuilder')).to.be.true;
  });

  it('contains a CardGallery and a CardList', function() {
    const wrapper = shallow(<DeckBuilder />);
    expect(wrapper.find('CardGallery')).to.have.length.of(1);
    expect(wrapper.find('CardList')).to.have.length.of(1);
  });

  it('displays a collection', function() {
    const wrapper = shallow(<DeckBuilder />);
    const collection = collectibleCards.slice(0, 2);
    wrapper.setState({ cards: collection });
    expect(wrapper.find('CardGallery').props().cards).to.have.length(collection.length);
  });

  it('adds cards to the deck', function() {
    const wrapper = shallow(<DeckBuilder />);
    expect(wrapper.find('CardList').props().cards).to.have.length(0);
    wrapper.find('CardGallery').simulate('click');
    expect(wrapper.find('CardList').props().cards).to.have.length(1);
  });

  it('removes cards from the deck', function() {
    const wrapper = shallow(<DeckBuilder />);
    const deck = collectibleCards.slice(0, 2);
    wrapper.setState({ deck: deck });
    expect(wrapper.find('CardList').props().cards).to.have.length(deck.length);
    wrapper.find('CardList').simulate('click', deck[0]);
    expect(wrapper.find('CardList').props().cards).to.have.length(deck.length - 1);
  });
});
