import { expect } from 'chai';
import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import CardList from '../src/components/CardList';
import EX1_116 from './cards/EX1_116.json';

describe('CardList', function() {
  const cards = [ EX1_116, EX1_116 ];

  it('renders a list of cards', function() {
    const renderer = ReactTestUtils.createRenderer();
    renderer.render(<CardList cards={cards} />)
    const result = renderer.getRenderOutput();

    expect(result.props.className).to.equal('hs-CardList');
    expect(result.props.children.length).to.equal(cards.length);
  });
});
