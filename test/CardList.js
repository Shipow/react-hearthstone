import { expect } from 'chai';
import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import CardList from '../src/components/CardList';
import EX1_116 from './cards/EX1_116.json';
import collectibleCards from './hearthstonejson/cards.collectible.json';

describe('CardList', function() {
  it('renders a list of cards', function() {
    const cards = collectibleCards.slice(0, 2);

    const renderer = ReactTestUtils.createRenderer();
    renderer.render(<CardList cards={cards} />);
    const result = renderer.getRenderOutput();

    expect(result.props.className).to.equal('hs-CardList');
    expect(result.props.children.length).to.equal(cards.length);
  });
  
  it('renders duplicate cards as single items', function() {
    const cards = [ collectibleCards[0], collectibleCards[0] ];

    const renderer = ReactTestUtils.createRenderer();
    renderer.render(<CardList cards={cards} />);
    const result = renderer.getRenderOutput();

    expect(result.props.children.length).to.equal(1);
  });
});
