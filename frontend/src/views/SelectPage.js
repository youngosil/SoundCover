import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button1 from '../components/Button1';

function SelectPage() {
  const navigate = useNavigate();

  const goToMyAlbums = () => {
    navigate('/MyAlbums');
  };

  const goToGenrePage = () => {
    navigate('/GenrePage');
  };

  return (
    <div style ={{ display: 'flex', alignItems: 'center'}}>
        <Button1 onClick={goToMyAlbums} style={{ width: '300px', height: '300px', margin: '5rem', fontWeight: '700', fontSize: '20px' }}>
            My albums
        </Button1>
        <Button1 onClick={goToGenrePage} style={{ width: '300px', height: '300px', margin: '5rem', fontWeight: '700', fontSize: '20px' }}>
            Make a new album
        </Button1>
    </div>
  );
}

export default SelectPage;
