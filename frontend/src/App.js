import './App.css';
import { Route, Routes } from 'react-router-dom';
import LandingPage from "../src/views/LandingPage";
import MainPage from "../src/views/MainPage";
import LoginPage from "../src/views/LoginPage";
import PromptPage1 from "../src/views/PromptPage1";

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/MainPage' element={<MainPage />} />
        <Route path='/LoginPage' element={<LoginPage />} />
        <Route path='/Prompt1' element={<PromptPage1 />} />
      </Routes>
    </div>
  );
}

export default App;
