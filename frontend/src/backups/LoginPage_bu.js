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
      const formData = new URLSearchParams();
      formData.append('username', ID);
      formData.append('password', PW);

      const response = await fetch('http://127.0.0.1:8000/auth/token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formData,
      });

      if (response.ok) {
        // 성공적으로 응답 받았을 때의 로직
        const data = await response.json();

        if (data && data.access_token) {
          console.log('Login successful:', data);

          // 사용자 정보를 저장하거나 상태를 업데이트할 수 있음
          const userDataResponse = await fetch('http://127.0.0.1:8000/auth/get_user_data', {
            headers: {
              'Authorization': `Bearer ${data.access_token}`,
            },
          });

          if (userDataResponse.ok) {
            const userData = await userDataResponse.json();
            console.log('User data:', userData);

            // 사용자 정보를 전역 상태 또는 컨텍스트에 저장
            // setUser(userData);

            // 로그인 후의 페이지로 이동
            setTimeout(() => {
              navigate('/SelectPage');
            }, 500);
          } else {
            console.error('Failed to fetch user data:', userDataResponse.status);
          }
        } else {
          console.error('Invalid access token:', data);
        }
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
          SOUNDCOVER 입니다.<br /><br />
        </label>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <input
            name="ID"
            placeholder="아이디를 입력해주세요"
            value={ID}
            onChange={(e) => setID(e.target.value)}
            style={{ padding: '1rem', marginTop: '0.5rem' }}
          />
          <input
            name="PW"
            placeholder="비밀번호를 입력해주세요."
            value={PW}
            onChange={(e) => setPW(e.target.value)}
            style={{ padding: '1rem', marginTop: '0.5rem' }}
          />
          <Button1 onClick={handleLogin}>로그인</Button1>
          <Button1 onClick={goToSignupPage} style={{ backgroundColor: 'black', color: '#C7FCEB' }}>회원가입</Button1>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;