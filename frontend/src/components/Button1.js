import React, { onClick, style } from 'react';

const Button1 = ({ onClick, children, style }) => {
  const defaultStyle = {
    margin: '1rem',
    padding: '1rem',
    width: '100%',
    backgroundColor: '#C7FCEB',
    color: 'black',
    border: 'none',
    borderRadius: '10px',
    cursor: 'pointer',
    fontFamily: 'Montserrat',
  };

  return (
    <button style={{ ...defaultStyle, ...style }} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button1;
