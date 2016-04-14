import { expect } from 'chai';
import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import CardListItem from '../src/components/CardListItem';
import EX1_116 from './cards/EX1_116.json';

describe('CardListItem', function() {
  const card = EX1_116;

  it('should render a card', function() {
    const renderer = ReactTestUtils.createRenderer();
    renderer.render(<CardListItem {...card} />)
    const result = renderer.getRenderOutput();
  });
});
