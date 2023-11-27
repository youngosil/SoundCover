import React, { useState } from 'react';
import { useUser } from '../contexts/UserContext';
import { useParams } from 'react-router-dom';

function ExtractedAlbumsPage() {
  const { result } = useParams();
  const { user } = useUser();
  const [hovered, setHovered] = useState(false);

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
      <div 
        style={{ textAlign: 'center', color: '#C7FCEB', fontWeight: 'bold', fontSize: '1.5rem' }}>
        {user.username}
      </div>
      <br />
      <h1>Finally, we made your album!</h1>
      <div style={containerStyle}>
          <img
            src={result.url} // 이미지 URL로 설정
            alt='Album Cover'
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
      </div>
    </div>
  );
}

export default ExtractedAlbumsPage;
