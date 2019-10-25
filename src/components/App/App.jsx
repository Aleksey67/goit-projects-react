import React from 'react';
import Profile from '../Profile/Profile';
import Stats from '../Stats/Stats';
import FriendList from '../FriendList/FriendList';
import TransactionHistory from '../TransactionHistory/TransactionHistory';
import stats from '../../data/stats.json';
import user from '../../data/user.json';
import friends from '../../data/friends.json';
import transactions from '../../data/transactions.json';
import '../../styles.css';

const App = () => (
  <div>
    <Profile
      name={user.name}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />
    <Stats title="Upload stats" stats={stats} />
    <FriendList friends={friends} />
    <TransactionHistory items={transactions} />
  </div>
);

export default App;
