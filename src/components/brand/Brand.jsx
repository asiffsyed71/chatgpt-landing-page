import React from 'react';
import google from '/src/assets/google.png';
import slack from '/src/assets/slack.png';
import atlassian from '/src/assets/atlassian.png';
import dropbox from '/src/assets/dropbox.png';
import shopify from '/src/assets/shopify.png';
import './Brand.css';

const Brand = () => {
  return (
    <div className="gpt3__brand section__margin">
      <div>
        <img src={google} alt="google" />
      </div>
      <div>
        <img src={slack} alt="slack" />
      </div>
      <div>
        <img src={atlassian} alt="atlassian" />
      </div>
      <div>
        <img src={dropbox} alt="dropbox" />
      </div>
      <div>
        <img src={shopify} alt="shopify" />
      </div>
    </div>
  )
}

export default Brand