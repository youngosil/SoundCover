import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css'

import LandingPage from './views/LandingPage';
import MainPage from './views/MainPage';
import LoginPage from './views/LoginPage';
import SignupPage from './views/SignupPage';
import SelectPage from './views/SelectPage';
import MyAlbums from './views/MyAlbums';
import GenrePage from './views/GenrePage';
import PaintingStylePage from './views/PaintingStylePage';
import TrendingOn from './views/TrendingOn';
import Elements from './views/Elements';
import Sentiments from './views/Sentiments';
import ExtractedAlbumsPage from './views/ExtractedAlbumsPage';



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
      <Route path="/TrendingOn" element={<TrendingOn />} />
      <Route path="/Elements" element={<Elements />} />
      <Route path="/Sentiments" element={<Sentiments />} />
      <Route path="/ExtractedAlbumsPage" element={<ExtractedAlbumsPage />} />
    </Routes>
  );
};

export default AppRouter;

