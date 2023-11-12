import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button1 from '../components/Button1';

function PromptPage1() {
  const [Prompt1, setPrompt1] = useState('');
  
  const navigate = useNavigate();

  const handlePrompt = () => {
    console.log('Prompt1:', Prompt1);

    setTimeout(() => {
      navigate('/PromptPage2');
    }, 2000);
  };

  return (
    <div>
      000님,<br />
      이번 앨범의 주제는 무엇인가요?<br />
        <input
          name="Prompt1"
          value={Prompt1 || "(100자 이내로 입력해주세요.)"}
          onChange={(e) => setPrompt1(e.target.value)}
          style={{ padding: '1rem', marginTop: '2rem', width: '600px', height: '300px' }}
        /><br />
      <Button1 onClick={handlePrompt}>다음으로 넘어가기 &#187;&#187; </Button1>
    </div>

  );
}

export default PromptPage1;
