import React from 'react';
import { useUser } from '../contexts/UserContext'

const Navbar = () => {
  const { user, logout } = useUser();

  return (
    <div>
      {user ? (
        <div>
          <span>Hello, {user.username}!</span>
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <span>Please login</span>
      )}
    </div>
  );
};

export default Navbar;
