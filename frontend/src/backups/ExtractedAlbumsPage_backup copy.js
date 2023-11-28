import React, { useState } from 'react';
import { useUser } from '../contexts/UserContext';

function ExtractedAlbumsPage() {
  const { user } = useUser();
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const containerStyle = {
    textAlign: 'center',
    transition: 'transform 0.3s ease',
  };

  const imageStyle = (index) => ({
    width: hoveredIndex === index ? '120px' : '100px',
    height: hoveredIndex === index ? '120px' : '100px',
    margin: '5px',
  });

  return (
    <div>
      <div 
          style={{textAlign: 'center', color: '#C7FCEB', fontWeight: 'bold', fontSize: '1.5rem'}}>{user.username}</div><br/>
      <h1>Finally, we made your album !</h1>
      <div style={containerStyle}>
        {imageNames.map((imageName, index) => (
          <img
            key={index}
            src={`/images/${imageName}`} // 이미지 경로 설정
            alt={`Album ${index + 1}`}
            style={imageStyle(index)}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          />
        ))}
      </div>
    </div>
  );
}

export default ExtractedAlbumsPage;
