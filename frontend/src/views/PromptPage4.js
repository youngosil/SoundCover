import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button1 from '../components/Button1';

function PromptPage4() {
  const [Prompt4, setPrompt4] = useState('');
  
  const navigate = useNavigate();

  const handlePrompt = () => {
    console.log('Prompt4:', Prompt4);
  };

  const backtoPreviousPage = () => {
    setTimeout(() => {
      navigate('/PromptPage3');
    }, 800)
  };

  return (
    <div>
      000님,<br />
      이번 앨범에는 어떤 노래들이 포함되어 있나요?<br />
        <input
          name="Prompt4"
          value={Prompt4 || "(100자 이내로 입력해주세요.)"}
          onChange={(e) => setPrompt4(e.target.value)}
          style={{ padding: '1rem', marginTop: '2rem', width: '600px', height: '300px' }}
        /><br />
      <Button1 onClick={backtoPreviousPage}>&#171;&#171; 이전으로 돌아가기</Button1>
      <Button1 onClick={handlePrompt}>나만의 앨범 만들러 가기&#187;&#187; </Button1>
    </div>

  );
}

export default PromptPage4;
