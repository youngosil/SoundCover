import React, { useState, useEffect } from 'react';
import { useUser } from '../contexts/UserContext';
import { useLocation } from 'react-router-dom';
import Header from '../components/Header';
import '../styles/ShowAlbums.css';

function ExtractedAlbumsPage() {
  const { user } = useUser();
  const location = useLocation();
  const resultUrl = location.state?.resultUrl || ''; // Access resultUrl from location state

  const [imageLoaded, setImageLoaded] = useState(false);
  const [hovered, setHovered] = useState(false);

  {/*useEffect(() => {
  }, [resultUrl]);*/}

  useEffect(() => {
    // 이미지 로딩이 완료되면 이미지 표시 및 페이드 인 효과 추가
    const img = new Image();
    img.src = resultUrl;
    img.onload = () => {
      setImageLoaded(true);
    };
  }, [resultUrl]);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const containerStyle = {
    textAlign: 'center',
    opacity: imageLoaded ? 1 : 0,
    transition: 'transform 0.3s ease',
    transform: hovered ? 'scale(1.1)' : 'scale(1)',
    //opacity: hovered ? 1 : 0.5
  };

  return (
    <div>
      <Header />
      <br />
      <h1 style={{textAlign:'center'}}>
        Finally, we made your album!<br/>.<br/>.<br/>.<br/>
      </h1>
      <div className={`image-container fade-in`} style={containerStyle}>  
      <img
          src={resultUrl}
          alt='Album Cover'
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{width:'400px',height:'400px'}}
        />
      </div>
    </div>
  );
}

export default ExtractedAlbumsPage;