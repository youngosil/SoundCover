import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css'

import LandingPage from './views/LandingPage';
import MainPage from './views/MainPage';
import LoginPage from './views/LoginPage';
import SignupPage from './views/SignupPage';
import SelectPage from './views/SelectPage';
import MyAlbums from './views/MyAlbums';
import PaintingStylePage from './views/PaintingStylePage';
import ExtractedAlbumsPage from './views/ExtractedAlbumsPage';
import GenrePage from './views/GenrePage';
import Elements from './views/Elements';
import Sentiments from './views/Sentiments';


const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/MainPage" element={<MainPage />} />
      <Route path="/LoginPage" element={<LoginPage />} />
      <Route path="/SignupPage" element={<SignupPage />} />
      <Route path="/SelectPage" element={<SelectPage />} />
      <Route path="/MyAlbums" element={<MyAlbums />} />
      <Route path="/GenrePage" element={<GenrePage />} />
      <Route path="/PaintingStylePage" element={<PaintingStylePage />} />
      <Route path="/Elements" element={<Elements />} />
      <Route path="/Sentiments" element={<Sentiments />} />
      <Route path="/ExtractedAlbumsPage" element={<ExtractedAlbumsPage />} />
    </Routes>
  );
};

export default AppRouter;

