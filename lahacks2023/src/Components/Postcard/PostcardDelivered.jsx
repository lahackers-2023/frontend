import React from 'react';
import { useState } from 'react';
import './PostcardDelivered.css'

function PostcardDelivered({ message }) {
  return (
    <div className='postcard-wrapper-delivered'>
      <div className='postcard-back-text-delivered'>
        <p className='postcard-back-text-field-delivered' maxlength="600">
          {message} "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla auctor elit at nibh ullamcorper, sit amet pretium velit suscipit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse volutpat gravida tortor eget pharetra. Vivamus in eros libero. Fusce faucibus, turpis ac pretium pulvinar, sapien tortor vestibulum magna, vel aliquet justo massa in lorem. Nunc congue id massa a luctus. Quisque blandit venenatis felis, sit amet hendrerit libero hendrerit non. Sed scelerisque, ipsum sed bibendum dictum, nisi lacus hendrerit velit, sit amet molestie dolor magna nec turpis. Suspendisse potenti. Aliquam placerat neque sed quam bibendum, quis tristique enim gravida. Donec eu tellus a leo efficitur congue quis id elit."
        </p>
      </div>
    </div>
  );
}

export default PostcardDelivered;