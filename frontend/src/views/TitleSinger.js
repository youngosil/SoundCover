import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { usePromptContext } from '../contexts/PromptContext';
import Button1 from '../components/Button1';
import Header from '../components/Header';
import Switch from 'react-switch';

const TitleSinger = () => {
  const [Title, setTitle] = useState('');
  const [Singer, setSinger] = useState('');
  const [isTitleEnabled, setIsTitleEnabled] = useState(true);
  const [isSingerEnabled, setIsSingerEnabled] = useState(true);

  const navigate = useNavigate();
  const { sharedData, updateSharedData } = usePromptContext();

  const handlePrompt = () => {
    console.log('Title:', isTitleEnabled ? Title : '');
    console.log('Singer:', isSingerEnabled ? Singer : '');
    console.log('print_title:',isTitleEnabled);
    console.log('print_singer:', isSingerEnabled);

    const updatedData = {
      ...sharedData.data,
      'Title': isTitleEnabled ? Title : '',
      'Singer': isSingerEnabled ? Singer : '',
      'print_title': isTitleEnabled,
      'print_singer': isSingerEnabled,
      'url':'/administrator'
    };

    updateSharedData(sharedData.message, updatedData);

    setTimeout(() => {
      navigate('/GenrePage');
    }, 500);
  };

  return (
    <div>
      <Header />

      <div style={{ width: '100%', margin: '1rem auto' }}>
        <label>
          <h1>What's your title ?</h1>
          <input
            name="Title"
            placeholder="( your album title )"
            value={Title}
            onChange={(e) => setTitle(e.target.value)}
            style={{ padding: '1rem', marginTop: '0.5rem', marginBottom: '1rem', marginRight: '1rem',width: '20rem', fontFamily: 'Montserrat' }}
          />
          <div style={{display:'flex', gap: '20px', textAlign:'center'}}>
            Do you want to inclue it to your album cover?
            <Switch
              checked={isTitleEnabled} 
              onChange={() => setIsTitleEnabled(!isTitleEnabled)} 
              onColor="#FF007F" // 토글 활성화 배경색
              offColor="#E0E0E0"   // 토글 비활성화 배경색
              handleDiameter={22} // 핸들 지름 설정
              activeBoxShadow="0 0 2px 3px #ED6A2C" // 토글 활성화 박스 쉐도우
              boxShadow="0 0 2px 3px #A1A1A1" // 토글 비활성화 박스 쉐도우
              className="custom-switch" // 커스텀 클래스 추가
            />
          </div>
          
        </label>

        <label>
          <h1>What's your singer name ?</h1>
          <input
            name="Singer"
            placeholder="( your singer name )"
            value={Singer}
            onChange={(e) => setSinger(e.target.value)}
            style={{ padding: '1rem', marginTop: '0.5rem', marginBottom: '1rem', width: '20rem', fontFamily: 'Montserrat', marginRight: '1rem' }}
          />
          <div style={{display:'flex', gap: '20px', textAlign:'center'}}>
            Do you want to inclue it to your album cover?
            <Switch
              checked={isSingerEnabled} 
              onChange={() => setIsSingerEnabled(!isSingerEnabled)} 
              onColor="#FF007F" 
              offColor="#E0E0E0"   
              handleDiameter={22} 
              boxShadow="0 0 2px 3px #A1A1A1"
              className="custom-switch" 
            />
          </div>
        </label>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Button1 onClick={handlePrompt}>Next page &#187;&#187;</Button1>
      </div>
    </div>
  );
};

export default TitleSinger;
