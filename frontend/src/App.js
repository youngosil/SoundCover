import React from 'react';
import { UserProvider } from './UserContext';
import AppRouter from './AppRouter';
import Navbar from './views/Navbar';

function App() {
  return (
    <UserProvider>
      <AppRouter />
    </UserProvider>
  );
}

export default App;
