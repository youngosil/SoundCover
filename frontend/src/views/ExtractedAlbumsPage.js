import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

function ExtractedAlbumsPage() {
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

  // 백엔드에서 이미지 + 설명글 불러와야함
  const imageNames = ['image1.png','image2.png','image3.png'];

  return (
    <div>
      <div 
          style={{textAlign: 'center', color: '#C7FCEB', fontWeight: 'bold', fontSize: '1.5rem'}}>000님,</div><br/>
      <div>작성해주신 정보를 통해 만든 3개의 앨범 커버입니다.</div><br/>
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
