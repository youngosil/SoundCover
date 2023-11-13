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
          member_id: ID,
          member_pw: PW,
        }),
      });

      if (response.ok) {
        // 성공적으로 응답 받았을 때의 로직
        const data = await response.json();
        console.log('Login successful:', data);

        // 예를 들어, 서버에서 토큰을 받아 로컬 스토리지에 저장할 수 있습니다.
        // localStorage.setItem('token', data.token);

        // 로그인 후의 페이지로 이동
        navigate('/PromptPage1');
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