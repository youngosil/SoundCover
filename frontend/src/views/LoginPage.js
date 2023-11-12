import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button1 from '../components/Button1';

function LoginPage() {
  const [ID, setID] = useState('');
  const [PW, setPW] = useState('');
  
  const navigate = useNavigate();
  const goToSignupPage = () => {
    navigate('/SignupPage');
  };

  const handleLogin = () => {
    // 여기에서 로그인 처리 로직을 구현
    // ID, PW 상태를 백엔드에서 사용
    console.log('ID:', ID);
    console.log('PW:', PW);

    setTimeout(() => {
      navigate('/PromptPage1');
    }, 2000)
    
  };

  return (
    <div style={{ width: '100%', margin: '0' }}>
      <div style={{ width: '100%', margin: '1rem auto' }}>
        <label>
          반갑습니다.<br />
          SOUNDCOVER 입니다.<br />
          <input
            name="ID"
            value={ID || "아이디를 입력해주세요."}
            onChange={(e) => setID(e.target.value)}
            style={{ padding: '1rem', marginTop: '0.5rem' }}
          /><br />
          <input
            name="PW"
            value={PW || "비밀번호를 입력해주세요."}
            onChange={(e) => setPW(e.target.value)}
            style={{ padding: '1rem', marginTop: '0.5rem' }}
          />
        </label>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Button1 onClick={handleLogin}>로그인</Button1>
        <Button1 onClick={goToSignupPage} style={{ backgroundColor: 'black', color: '#C7FCEB' }}>회원가입</Button1>
      </div>
    </div>
  );
}

export default LoginPage;