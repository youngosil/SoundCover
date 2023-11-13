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

  const handleLogin = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/LogIn', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: ID,
          password: PW,
        }),
      });

      if (response.ok) {
        // 성공적으로 응답 받았을 때의 로직
        const data = await response.json();

        if (data.status === 'success') {
          console.log('Login successful:', data);
        }

        // 로그인 후의 페이지로 이동
        setTimeout(() => {
          navigate('/PromptPage1');
        }, 2000)

      } else {
        // 응답이 실패했을 때의 로직
        console.error('Login failed:', response.status);
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  return (
    <div style={{ width: '100%', margin: '0' }}>
      <div style={{ width: '100%', margin: '1rem auto' }}>
        <label>
          반갑습니다.<br />
          SOUNDCOVER 입니다.<br />
          <input
            name="ID"
            placeholder="아이디를 입력해주세요"
            value={ID}
            onChange={(e) => setID(e.target.value)}
            style={{ padding: '1rem', marginTop: '0.5rem' }}
          /><br />
          <input
            name="PW"
            placeholder="비밀번호를 입력해주세요."
            value={PW}
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