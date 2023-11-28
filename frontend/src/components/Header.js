import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../contexts/UserContext';

const Header = () => {
  const navigate = useNavigate();
  const { user, logout } = useUser();

  const handleLogout = () => {
    logout();
  };

  const goToMyAlbums = () => {
    navigate('/MyAlbums');
  };

  return (
    <div style={headerStyle}>
      <div style={logoStyle} onClick={() => navigate('/')}>
        Home
      </div>
      <div style={userInfoStyle}>
        {user ? (
          <>
            <h3>Hello, {user.username}</h3>
            <button 
              style={{ 
                fontFamily: 'Nephilm', 
                cursor: 'pointer',}}
              onClick={handleLogout}>
                logout
            </button>
            <button 
              style={{ 
                fontFamily: 'Nephilm', 
                cursor: 'pointer'}} 
              onClick={goToMyAlbums}>
                My Albums
            </button>
          </>
        ) : (
          <div onClick={() => navigate('/LoginPage')}>
            로그인
          </div>
        )}
      </div>
    </div>
  );
};

const headerStyle = {
  position: 'fixed',
  top: 20,
  left: 20,
  width: '95%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '10px',
  marginRight: '1rem',
  color: '#fff',
};

const logoStyle = {
  cursor: 'pointer',
  fontSize: '1.5rem'
};


const navStyle = {
  display: 'flex',
  gap: '20px',
};

const userInfoStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '10px',
  cursor: 'pointer',
};

export default Header;