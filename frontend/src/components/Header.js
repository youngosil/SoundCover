// Header.js
import React from 'react';
import { Link } from 'react-router-dom';
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
        Ho
      </div>
      <div style={navStyle}>
        <div onClick={() => navigate('/SelectPage')}>Select Page</div>
      </div>
      <div style={userInfoStyle}>
        {user ? (
          <>
            <span>{user.username}님</span>
            <button onClick={handleLogout}>로그아웃</button>
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
  backgroundColor: '#333',
  color: '#fff',
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
  gap: '10px',
  cursor: 'pointer',
};

export default Header;