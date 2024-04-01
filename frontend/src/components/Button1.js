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
    marginTop : '1rem',
    width : '100%'
  };

  return (
    <button
      style={{ ...defaultStyle, ...style }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button1;
