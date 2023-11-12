import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button1 from '../components/Button1';

function PromptPage2() {
  const [Prompt2, setPrompt2] = useState('');
  
  const navigate = useNavigate();

  const handlePrompt = () => {
    console.log('Prompt2:', Prompt2);

    setTimeout(() => {
      navigate('/PromptPage3');
    }, 2000);
  };

  const backtoPreviousPage = () => {
    setTimeout(() => {
      navigate('/PromptPage1');
    }, 800)
  };

  return (
    <div>
      000님,<br />
      이번 앨범의 장르는 무엇인가요?<br />
        <input
          name="Prompt2"
          value={Prompt2 || "(100자 이내로 입력해주세요.)"}
          onChange={(e) => setPrompt2(e.target.value)}
          style={{ padding: '1rem', marginTop: '2rem', width: '600px', height: '300px' }}
        /><br />
      <Button1 onClick={backtoPreviousPage}>&#171;&#171; 이전으로 돌아가기</Button1>
      <Button1 onClick={handlePrompt}>다음으로 넘어가기 &#187;&#187; </Button1>
    </div>

  );
}

export default PromptPage2;
