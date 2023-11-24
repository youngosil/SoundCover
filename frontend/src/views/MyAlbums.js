import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button1 from '../components/Button1';
import { containerStyle, labelStyle } from '../styles';

// database에 저장된 id별 데이터 가져와서 출력해야됨

function MyAlbums() {
  const [Prompt1, setPrompt1] = useState('');
  
  const navigate = useNavigate();

  const handlePrompt = () => {
    console.log('Prompt1:', Prompt1);

    setTimeout(() => {
      navigate('/PromptPage2');
    }, 500);
  };

  return (
    <div style={containerStyle}> {/*style.js에 css처럼 기재*/}
      <label style={labelStyle}>
        000님,<br />
      </label>
      <label>
        나만의 앨범임!!!!<br />
      </label>
      <input
        name="Prompt1"
        placeholder="(100자 이내로 입력해주세요.)"
        value={Prompt1}
        onChange={(e) => setPrompt1(e.target.value)}
        style={{ padding: '1rem', marginTop: '2rem', width: '600px', height: '300px' }}
      /><br />
      <Button1 onClick={handlePrompt}>
        다음으로 넘어가기 &#187;&#187; 
      </Button1>
    </div>

  );
}

export default MyAlbums;
