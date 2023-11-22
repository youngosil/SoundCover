import React, { onClick, style } from 'react';

const Button1 = ({ onClick, children, style }) => {
  const defaultStyle = {
    padding: '1rem',
    backgroundColor: '#C7FCEB',
    color: 'black',
    border: 'none',
    borderRadius: '10px',
    cursor: 'pointer',
    fontFamily: 'Montserrat',
    margin : '1rem'
  };

  return (
    <button
      style={{ ...defaultStyle, ...style }}
      onClick={onClick}
      onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.3) '}
      onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
    >
      {children}
    </button>
  );
}

export default Button1;
