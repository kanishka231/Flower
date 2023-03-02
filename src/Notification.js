import React from 'react';
import './Notification.css';
const Notification = () => {
  const handleClick = () => {
    alert('Notification sent!');
    // You can also use other notification methods like push notifications or desktop notifications
  };

  return (
    <div className='notification'>
    <button style={{ backgroundColor: 'red', color: 'white', padding: '70px', borderRadius: '10px' }} onClick={handleClick}>
      Press Me !
    </button>
    </div>
  );
};

export default Notification;
