import React from 'react';
import closeButton from './close-icon.png';
import { getLatestNotification } from './utils';

import './Notifications.css';

const Notifications = () => {
  return (
    <div className="Notifications">
      <button style={{ background: 'transparent', border: 'none', position: 'absolute', right: 15, top: 15 }} aria-label='close' onClick={() => console.log('Close button has been clicked')} >
        <img src={closeButton} alt="Close button" />
      </button>
      <p>Here is the list of notifications</p>
      <ul>
        <li data-priority="default">New course available</li>
        <li data-priority="urgent">New resume available</li>
        <li data-priority="urgent" dangerouslySetInnerHTML={{ __html: getLatestNotification() }}></li>
      </ul>
    </div>
  )
}

export default Notifications;
