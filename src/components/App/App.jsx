import React from 'react';
import Profile from '../Profile/Profile';
import Stats from '../Stats/Stats';
import user from '../../data/user.json';
import './App.css';

const stats = [
  { id: 'id-1', label: '.docx', percentage: 22 },
  { id: 'id-2', label: '.pdf', percentage: 4 },
  { id: 'id-3', label: '.mp3', percentage: 17 },
  { id: 'id-4', label: '.psd', percentage: 47 },
  { id: 'id-5', label: '.pdf', percentage: 10 },
];

const App = () => {
  return (
    <div className="app">
      <Profile user={user} />
      <Stats title="Upload stats" stats={stats} />
    </div>
  );
}

export default App;