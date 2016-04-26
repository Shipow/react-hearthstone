import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import CardGalleryItem from '../components/CardGalleryItem';
import collectibleCards from './hearthstonejson/cards.collectible.json';

describe('CardGalleryItem', function() {
  it('renders', function() {
    const card = collectibleCards[0];
    const wrapper = shallow(<CardGalleryItem card={card} />);
    expect(wrapper.hasClass('hs-CardGalleryItem')).to.be.true;
  });

  it('contains the card\'s image', function() {
    const card = collectibleCards[0];
    const wrapper = shallow(<CardGalleryItem card={card} />);
    expect(wrapper.find('img')).to.have.length(1);
    expect(wrapper.find('img').hasClass('hs-CardGalleryItem__image')).to.be.true;
  });

  it('renders the card\'s rarity', function() {
    const card = collectibleCards[0];
    const wrapper = shallow(<CardGalleryItem card={card} />);
    expect(wrapper.hasClass('hs-CardGalleryItem_' + card.rarity.toLowerCase())).to.be.true;
  });
});
