import { expect } from 'chai';
import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-addons-test-utils';
import DeckBuilder from '../src/components/DeckBuilder';

describe('DeckBuilder', function() {
  const renderer = ReactTestUtils.createRenderer();

  it('renders', function() {
    renderer.render(<DeckBuilder />)
    const result = renderer.getRenderOutput();
    expect(result.props.className).to.equal('hs-DeckBuilder');
  });
});
