import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import WithFooter from './layouts/WithFooter.jsx';
import NoFooter from './layouts/NoFooter';

import Login from './login/login';
import About from './about/about';
import Play from './play/play';
import Collection from './collection/collection';
import Friends from './friends/friends';

export default function App() {
  return (
  <BrowserRouter>
    <Routes>
      <Route element={<WithFooter />}>
        <Route path="/" element={<Login />} />
        <Route path="/about" element={<About />} />
      </Route>

      <Route element={<NoFooter />}>
        <Route path="/play" element={<Play />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/friends" element={<Friends />} />
      </Route>
    </Routes>
  </BrowserRouter>
  );
}