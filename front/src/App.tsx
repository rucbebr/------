import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Header } from './components/Header';

import { Home } from './pages/Home';
import { Registration } from './pages/Registration';
import { UserProfile } from './pages/UserProfile';
import { Mission } from './pages/Mission';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/mission" element={<Mission />} />
      </Routes>
    </div>
  );
}

export default App;