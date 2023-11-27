// Header.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../contexts/UserContext';

const Header = () => {
  const navigate = useNavigate();
  const { user, logout } = useUser();

  const handleLogout = () => {
    // 로그아웃 로직 수행 후 UserContext에서 로그아웃
    logout();
  };

  return (
    <div style={headerStyle}>
      <div style={logoStyle} onClick={() => navigate('/')}>
        Home
      </div>
      <div style={userInfoStyle}>
        {user ? (
          <>
            <h3>{user.username}</h3>
            <button style={{fontFamily:'Montserrat'}}
                    onClick={handleLogout}>logout</button>
          </>
        ) : (
          <div onClick={() => navigate('/LoginPage')}>로그인</div>
        )}
      </div>
    </div>
  );
};

const headerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '10px',
  color: '#fff',
  width: '100%'
};

const logoStyle = {
  cursor: 'pointer',
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