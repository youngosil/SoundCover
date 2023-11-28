import React, { useState, useEffect } from 'react';
import { useUser } from '../contexts/UserContext';
import { useLocation } from 'react-router-dom';
import Header from '../components/Header';

function ExtractedAlbumsPage() {
  const { user } = useUser();
  const location = useLocation();
  const resultUrl = location.state?.resultUrl || ''; // Access resultUrl from location state

  const [hovered, setHovered] = useState(false);

  useEffect(() => {
  }, [resultUrl]);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const containerStyle = {
    textAlign: 'center',
    transition: 'transform 0.3s ease',
    transform: hovered ? 'scale(1.1)' : 'scale(1)',
  };

  return (
    <div>
      <Header />
      <br />
      <h1 style={{textAlign:'center'}}>Finally, we made your album!<br/>
      .<br/>
      .<br/>
      .<br/></h1>
      <div style={containerStyle}>
        <img
          src={resultUrl}
          alt='Album Cover'
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{width:'50%',height:'50%'}}
        />
      </div>
    </div>
  );
}

export default ExtractedAlbumsPage;