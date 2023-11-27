import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button1 from '../components/Button1';

function LoginPage() {
  const [ID, setID] = useState('');
  const [PW, setPW] = useState('');
  const [showErrorPopup, setShowErrorPopup] = useState(false); // 에러 여부 결정
  
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
        body: formData
      });

      if (response.ok) {
        // 성공적으로 응답 받았을 때의 로직
        const data = await response.json();

        if (data.access_token) {
          console.log('Login successful:', data);
        }

        // 로그인 후의 페이지로 이동
        setTimeout(() => {
          navigate('/SelectPage');
        }, 500);

      } else {
        // 응답이 실패했을 때의 로직
        console.error('Login failed:', response.status);
        setShowErrorPopup(true);
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  return (
    <div style={{ width: '100%', margin: '0'}}>
      <div style={{ width: '100%', margin: '1rem auto'}}>
        <h1>Sign In</h1>
        <div style={{ width: '250px', display: 'flex', flexDirection: 'column', fontFamily: 'Montserrat'}}>
          <input
            name="ID"
            placeholder="Please enter your ID"
            value={ID}
            onChange={(e) => setID(e.target.value)}
            style={{padding: '1rem', marginTop: '0.5rem', fontFamily:'Montserrat' }}
          />
          <input
            name="PW"
            placeholder="Please enter your password"
            value={PW}
            onChange={(e) => setPW(e.target.value)}
            style={{ padding: '1rem', marginTop: '0.5rem', fontFamily:'Montserrat' }}
          />
          <Button1 onClick={handleLogin}>Sign In</Button1>
          <Button1 onClick={goToSignupPage} style={{ backgroundColor: 'black', color: '#C7FCEB' }}>Sign Up</Button1>

          {/* 실패 시 에러 팝업*/}
          {showErrorPopup && (
            <h4 style={{ marginTop: '1rem', color: 'red', fontFamily:'Montserrat', textAlign:'center'}}>
              ID or password is not valid.
            </h4>
          )}
        </div>
      </div>
    </div>
  );
}

export default LoginPage;