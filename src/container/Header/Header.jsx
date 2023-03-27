import React from 'react';

import { SubHeading } from '../../components';
import {images} from '../../constants'
import './Header.css';

const Header = () => (
  <div className='app__header app__wrapper section__padding' id='home'>
    <div className='app__wrapper_info'>
      <SubHeading tittle='Chunneee will take you all over the world'/>
      <h1 className='app__header-h1'>Invest in yourself by travel</h1>
      <p className='p__opensans'style={{ margin: '2rem 0' }}> “I am not the same, having seen the moon shine on the other side of the world” – Mary Anne Radmacher</p>
      <button type='button' className='custom__button'>Explore more</button>
    </div>
    <div className='app__wrapper_img'>
      <img src={images.welcome} alt='header img'/>
    </div>
  </div>
);

export default Header;
