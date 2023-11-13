import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button1 from '../components/Button1';

function PromptPage3() {
  const [Prompt3, setPrompt3] = useState('');
  
  const navigate = useNavigate();

  const handlePrompt = () => {
    console.log('Prompt3:', Prompt3);

    setTimeout(() => {
      navigate('/PromptPage4');
    }, 2000);
  };

  const backtoPreviousPage = () => {
    setTimeout(() => {
      navigate('/PromptPage3');
    }, 800)
  };

  return (
    <div>
      000님,<br />
      이번 앨범의 소개글을 작성해주세요!<br />
        <input
          name="Prompt3"
          placeholder="(100자 이내로 입력해주세요.)"
          value={Prompt3}
          onChange={(e) => setPrompt3(e.target.value)}
          style={{ padding: '1rem', marginTop: '2rem', width: '600px', height: '300px' }}
        /><br />
      <Button1 onClick={backtoPreviousPage}>&#171;&#171; 이전으로 돌아가기</Button1>
      <Button1 onClick={handlePrompt}>다음으로 넘어가기 &#187;&#187; </Button1>
    </div>

  );
}

export default PromptPage3;
