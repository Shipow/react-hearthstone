import { expect } from 'chai';
import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import CardGalleryItem from '../src/components/CardGalleryItem';
import EX1_116 from './cards/EX1_116.json';

describe('CardGalleryItem', function() {
  const renderer = ReactTestUtils.createRenderer();

  it('renders a card with an image', function() {
    const card = EX1_116;
  
    renderer.render(<CardGalleryItem {...card} />)
    let result = renderer.getRenderOutput();

    expect(result.type).to.equal('li');
    expect(result.props.children.type).to.equal('img');
    expect(result.props.children.props.className).to.equal('hs-CardGalleryItem__image');
  });

  it('renders a free card', function() {
    const card = { rarity: 'FREE' };

    renderer.render(<CardGalleryItem {...card} />)
    let result = renderer.getRenderOutput();

    expect(result.props.className).to.equal('hs-CardGalleryItem hs-CardGalleryItem_free');
  });

  it('renders a common card', function() {
    const card = { rarity: 'COMMON' };

    renderer.render(<CardGalleryItem {...card} />)
    let result = renderer.getRenderOutput();

    expect(result.props.className).to.equal('hs-CardGalleryItem hs-CardGalleryItem_common');
  });

  it('renders a rare card', function() {
    const card = { rarity: 'RARE' };

    renderer.render(<CardGalleryItem {...card} />)
    let result = renderer.getRenderOutput();

    expect(result.props.className).to.equal('hs-CardGalleryItem hs-CardGalleryItem_rare');
  });

  it('renders an epic card', function() {
    const card = { rarity: 'EPIC' };

    renderer.render(<CardGalleryItem {...card} />)
    let result = renderer.getRenderOutput();

    expect(result.props.className).to.equal('hs-CardGalleryItem hs-CardGalleryItem_epic');
  });

  it('renders a legendary card', function() {
    const card = { rarity: 'LEGENDARY' };

    renderer.render(<CardGalleryItem {...card} />)
    let result = renderer.getRenderOutput();

    expect(result.props.className).to.equal('hs-CardGalleryItem hs-CardGalleryItem_legendary');
  });
});
