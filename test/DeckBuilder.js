import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import DeckBuilder from '../src/components/DeckBuilder';
import collectibleCards from './hearthstonejson/cards.collectible.json';

describe('DeckBuilder', function() {
  it('renders', function() {
    const wrapper = shallow(<DeckBuilder playerClass="PALADIN" />);
    expect(wrapper.hasClass('hs-DeckBuilder')).to.equal(true);
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
      expect(card.playerClass).to.equal(playerClass);
    });
  });

  it('filters neutral cards', function() {
    const wrapper = shallow(<DeckBuilder playerClass="PALADIN" />);
    const collection = collectibleCards;
    wrapper.setState({ cards: collection });
    wrapper.find('.hs-DeckBuilder__filter-neutral').simulate('click');
    const neutralCards = wrapper.find('CardGallery').prop('cards');
    neutralCards.forEach(function(card) {
      expect(card.playerClass).to.equal(undefined);
    });
  });

  it('adds cards to the deck', function() {
    const wrapper = shallow(<DeckBuilder playerClass="PALADIN" />);
    wrapper.setState({ cards: collectibleCards });
    expect(wrapper.find('CardList').prop('cards')).to.have.length(0);

    wrapper.find('CardGallery').simulate('click', wrapper.find('CardGallery').prop('cards')[0]);
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

  it('limits the deck size', function() {
    const wrapper = shallow(<DeckBuilder playerClass="PALADIN" />);
    const instance = wrapper.instance();
    collectibleCards.forEach(function(card) {
      if (card.rarity) instance.addCardToDeck(card);
    });
    expect(wrapper.state('deck')).to.have.length(DeckBuilder.defaultProps.deckSize);
  });

  it('limits card numbers in the deck by rarity', function() {
    const rarities = [ 'FREE', 'COMMON', 'RARE', 'EPIC', 'LEGENDARY' ];

    const wrapper = shallow(<DeckBuilder playerClass="PALADIN" />);
    const instance = wrapper.instance();
    
    let cardsByRarity = {};
    collectibleCards.forEach(function(card) {
      const rarity = card.rarity;
      if (!rarity) return;
      if (!cardsByRarity[rarity]) cardsByRarity[rarity] = [];
      cardsByRarity[rarity].push(card);
    });
    expect(DeckBuilder.defaultProps.deckLimits).to.contain.all.keys(rarities);

    rarities.forEach(function(rarity) {
      wrapper.setState({ deck: [] });
      const limit = DeckBuilder.defaultProps.deckLimits[rarity];
      const card = cardsByRarity[rarity][0];
      for (var i = 0; i < limit + 1; i++) {
        wrapper.instance().addCardToDeck(card);
      }
      expect(wrapper.state('deck')).to.have.length(limit);
    });
  });
});
