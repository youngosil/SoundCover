import React, { onClick, style } from 'react';

const Button2 = ({ onClick, children, style, selected }) => {
  const defaultStyle = {
    padding: '1rem',
    paddingLeft: '2rem',
    paddingRight: '2rem',
    backgroundColor: 'white',
    color: 'black',
    border: 'none',
    borderRadius: '10px',
    cursor: 'pointer',
    fontFamily: 'Montserrat',
    margin : '1rem',
    border: '3px solid white',
  };
  
  const selectedStyle={
    backgroundColor: 'pink', // 선택된 상태일 때의 배경색
    color: 'black', // 선택된 상태일 때의 텍스트 색상
    transform: 'scale(1.3)', // 선택된 상태일 때의 크기 변환
    border: '3px solid black',
  }

  return (
    <button
      style={{ ...defaultStyle, ...(selected ? selectedStyle : {}), ...style }}
      onClick={onClick}
      onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.3) '}
      onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}      
    >
      {children}
    </button>
  );
}

export default Button2;
