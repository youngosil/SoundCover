import React from 'react';
import { UserProvider } from './contexts/UserContext';
import { PromptProvider } from './contexts/PromptContext';
import AppRouter from './AppRouter';
import { motion } from 'framer-motion';

function App() {
  return (
    <UserProvider>
      <PromptProvider>
        <AppRouter />
      </PromptProvider>
    </UserProvider>
  );
}

export default App;
