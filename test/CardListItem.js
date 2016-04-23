import { expect } from 'chai';
import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import CardListItem from '../src/components/CardListItem';
import collectibleCards from './hearthstonejson/cards.collectible.json';

describe('CardListItem', function() {
  it('renders a card', function() {
    const card = collectibleCards[0];

    const renderer = ReactTestUtils.createRenderer();
    renderer.render(<CardListItem card={card} />)
    const result = renderer.getRenderOutput();

    const className = 'hs-CardListItem' + (card.rarity ? ' hs-CardListItem_' + card.rarity.toLowerCase() : '')
    expect(result.props.className).to.equal(className);
  });
});
