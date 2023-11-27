import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button2 from '../components/Button2';
import Header from '../components/Header';

function SelectPage() {
  const navigate = useNavigate();

  const goToMyAlbums = () => {
    setTimeout(() => {
    navigate('/MyAlbums');
  }, 500)};

  const goToTitleSinger = () => {
    setTimeout(() => {
      navigate('/TitleSinger');
    }, 500)};

  return (
    <div>
      <Header />
      <div style ={{ display: 'flex', alignItems: 'center'}}>
        <Button2 onClick={goToMyAlbums} style={{ width: '300px', height: '300px', margin: '5rem', fontWeight: '700', fontSize: '20px' }}>
          My albums
        </Button2>
        <Button2 onClick={goToTitleSinger} style={{ width: '300px', height: '300px', margin: '5rem', fontWeight: '700', fontSize: '20px' }}>
            Make a new album
        </Button2>
      </div>
    </div>
  );
}

export default SelectPage;