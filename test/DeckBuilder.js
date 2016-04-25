import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import DeckBuilder from '../src/components/DeckBuilder';
import collectibleCards from './hearthstonejson/cards.collectible.json';

describe('DeckBuilder', function() {
  it('renders', function() {
    const wrapper = shallow(<DeckBuilder playerClass="PALADIN" />);
    expect(wrapper.hasClass('hs-DeckBuilder')).to.be.true;
  });

  it('contains a CardGallery and a CardList', function() {
    const wrapper = shallow(<DeckBuilder playerClass="PALADIN" />);
    expect(wrapper.find('CardGallery')).to.have.length.of(1);
    expect(wrapper.find('CardList')).to.have.length.of(1);
  });

  it('displays a collection', function() {
    const wrapper = shallow(<DeckBuilder playerClass="PALADIN" />);
    const collection = collectibleCards;
    wrapper.setState({ cards: collection });
    expect(wrapper.find('CardGallery')).to.have.length.above(0);
  });

  it('filters class cards', function() {
    const wrapper = shallow(<DeckBuilder playerClass="PALADIN" />);
    const collection = collectibleCards;
    const playerClass = 'PALADIN';
    wrapper.setState({ cards: collection });
    wrapper.find('.hs-DeckBuilder__filter-player-class').simulate('click');
    const playerClassCards = wrapper.find('CardGallery').prop('cards');
    playerClassCards.forEach(function(card) {
      expect(card.playerClass).to.be.equal(playerClass);
    });
  });

  it('filters neutral cards', function() {
    const wrapper = shallow(<DeckBuilder playerClass="PALADIN" />);
    const collection = collectibleCards;
    wrapper.setState({ cards: collection });
    wrapper.find('.hs-DeckBuilder__filter-neutral').simulate('click');
    const neutralCards = wrapper.find('CardGallery').prop('cards');
    neutralCards.forEach(function(card) {
      expect(card.playerClass).to.be.undefined;
    });
  });

  it('adds cards to the deck', function() {
    const wrapper = shallow(<DeckBuilder playerClass="PALADIN" />);
    expect(wrapper.find('CardList').prop('cards')).to.have.length(0);
    wrapper.find('CardGallery').simulate('click');
    expect(wrapper.find('CardList').prop('cards')).to.have.length(1);
  });

  it('removes cards from the deck', function() {
    const wrapper = shallow(<DeckBuilder playerClass="PALADIN" />);
    const deck = collectibleCards.slice(0, 2);
    wrapper.setState({ deck: deck });
    expect(wrapper.find('CardList').prop('cards')).to.have.length(deck.length);
    wrapper.find('CardList').simulate('click', deck[0]);
    expect(wrapper.find('CardList').prop('cards')).to.have.length(deck.length - 1);
  });
});
