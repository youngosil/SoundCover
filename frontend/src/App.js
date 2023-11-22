import './App.css';
import { Route, Routes } from 'react-router-dom';
import LandingPage from "../src/views/LandingPage";
import MainPage from "../src/views/MainPage";
import LoginPage from "../src/views/LoginPage";
import SignupPage from "../src/views/SignupPage";
import PromptPage1 from "../src/views/PromptPage1";
import PromptPage2 from "../src/views/PromptPage2";
import PromptPage3 from "../src/views/PromptPage3";
import PromptPage4 from "../src/views/PromptPage4";
import GenrePage from "../src/views/GenrePage";
import PaintingStylePage from "../src/views/PaintingStylePage";
import ExtractedAlbumsPage from "../src/views/ExtractedAlbumsPage";




function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/MainPage' element={<MainPage />} />
        <Route path='/LoginPage' element={<LoginPage />} />
        <Route path='/SignupPage' element={<SignupPage />} />
        <Route path='/PromptPage1' element={<PromptPage1 />} />
        <Route path='/PromptPage2' element={<PromptPage2 />} />
        <Route path='/PromptPage3' element={<PromptPage3 />} />
        <Route path='/PromptPage4' element={<PromptPage4 />} />
        <Route path='/GenrePage' element={<GenrePage />} />
        <Route path='/PaintingStylePage' element={<PaintingStylePage />} />
        <Route path='/ExtractedAlbumsPage' element={<ExtractedAlbumsPage />} />
      </Routes>
    </div>
  );
}

export default App;
