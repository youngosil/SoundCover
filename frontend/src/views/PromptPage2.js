import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button1 from '../components/Button1';
import { containerStyle, labelStyle } from '../styles';

function PromptPage2() {
  const [Prompt2, setPrompt2] = useState('');
  
  const navigate = useNavigate();

  const handlePrompt = () => {
    console.log('Prompt2:', Prompt2);

    setTimeout(() => {
      navigate('/PromptPage3');
    }, 500);
  };

  const backtoPreviousPage = () => {
    setTimeout(() => {
      navigate('/PromptPage1');
    }, 500)
  };

  return (
    <div style={containerStyle}> {/*style.js에 css처럼 기재*/}
      <label style={labelStyle}>
        000님,<br />
      </label>
      <label>
        이번 앨범의 장르는 무엇인가요?<br />
      </label>
      <input
        name="Prompt2"
        placeholder="(100자 이내로 입력해주세요.)"
        value={Prompt2}
        onChange={(e) => setPrompt2(e.target.value)}
        style={{ padding: '1rem', marginTop: '2rem', width: '600px', height: '300px' }}
      /><br />
      <div style = {{ display: 'flex', justifyContent: 'space-between' }}>
        <Button1 onClick={backtoPreviousPage}>&#171;&#171; 
          이전으로 돌아가기
        </Button1>
        <Button1 onClick={handlePrompt} style = {{ marginLeft: '3rem' }}>
          다음으로 넘어가기 &#187;&#187; 
        </Button1>
      </div>
    </div>

  );
}

export default PromptPage2;
