import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button2 from '../components/Button2';

function SelectPage() {
  const navigate = useNavigate();

  const goToMyAlbums = () => {
    setTimeout(() => {
    navigate('/MyAlbums');
  }, 500)};

  const goToGenrePage = () => {
    setTimeout(() => {
      navigate('/GenrePage');
    }, 500)};

  return (
    <div style ={{ display: 'flex', alignItems: 'center'}}>
        <Button2 onClick={goToMyAlbums} style={{ width: '300px', height: '300px', margin: '5rem', fontWeight: '700', fontSize: '20px' }}>
            My albums
        </Button2>
        <Button2 onClick={goToGenrePage} style={{ width: '300px', height: '300px', margin: '5rem', fontWeight: '700', fontSize: '20px' }}>
            Make a new album
        </Button2>
    </div>
  );
}

export default SelectPage;
