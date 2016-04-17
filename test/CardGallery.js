import { expect } from 'chai';
import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import CardGallery from '../src/components/CardGallery';
import EX1_116 from './cards/EX1_116.json';

describe('CardGallery', function() {
  const cards = [ EX1_116, EX1_116 ];
  const renderer = ReactTestUtils.createRenderer();
  let result;

  beforeEach(function() {
    renderer.render(<CardGallery cards={cards} />)
    result = renderer.getRenderOutput();
  });

  it('renders a list of cards', function() {
    expect(result.props.children.length).to.equal(cards.length);
  });
});
