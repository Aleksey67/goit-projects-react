import React from 'react';
import './FriendListItem.css';

const FriendListItem = ({avatar, name, isOnline}) => {
  return (
    <li className="item">
      <span className={'status ' + (isOnline ? 'status-online' : '')}></span>
      <img className="avatar" src={avatar} alt="" width="48" />
      <p className="name">{name}</p>
    </li>
  );
};

export default FriendListItem;
