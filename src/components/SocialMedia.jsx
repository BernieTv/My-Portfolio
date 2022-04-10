import React from 'react';
import { BsTwitter, BsTelegram } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

const SocialMedia = () => (
  <div className='app__social'>
    <div>
      <a href='https://twitter.com/Bernie83655966' target={'_blank'} rel='noreferrer'>
        <BsTwitter />
      </a>
    </div>
    <div>
      <a href='https://www.facebook.com/Bekzod44' target={'_blank'} rel='noreferrer'>
        <FaFacebookF />
      </a>
    </div>
    <div>
      <a href='https://t.me/cheeri0' target={'_blank'} rel='noreferrer'>
        <BsTelegram />
      </a>
    </div>
  </div>
);

export default SocialMedia;
