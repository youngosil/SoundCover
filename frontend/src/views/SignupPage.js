import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button1 from '../components/Button1';

function SignupPage() {
  const [NewNickname, setNewNickname] = useState('');
  const [NewID, setNewID] = useState('');
  const [NewPW, setNewPW] = useState('');
  
  const navigate = useNavigate();

  const handleSignup = async () => {

    try {
      const response = await fetch('http://127.0.0.1:8000/SignUp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: NewNickname,
          id: NewID,
          password: NewPW,
        }),
      });

      if (response.ok) {
        // 성공적으로 응답 받았을 때의 로직
        const data = await response.json();
        
        if (data.status === 'success') {
          console.log('Signup successful:', data);
          
          // 로그인 후의 페이지로 이동
          setTimeout(() => {
            navigate('/LoginPage');
          }, 2000)
        }
      } else {
        // 응답이 실패했을 때의 로직
        console.error('Signup failed:', response.status);
      }
    } catch (error) {
      console.error('Error during Signup:', error);
    }
  };



    

  return (
    <div style={{ width: '100%', margin: '0' }}>
      <div style={{ width: '100%', margin: '1rem auto'}}>
        <label>
          닉네임 :  
          <input
            name="NewNickname"
            value={NewNickname || "사용하고자 하는 닉네임을 입력해주세요."}
            onChange={(e) => setNewNickname(e.target.value)}
            style={{ padding: '1rem', marginTop: '0.5rem', marginLeft: '1rem', marginBottom: '1rem', width: '20rem'}}
          /><br />
        </label>

        <label>
          ID : 
          <input
            name="NewID"
            value={NewID || "사용하고자 하는 아이디를 입력해주세요."}
            onChange={(e) => setNewID(e.target.value)}
            style={{ padding: '1rem', marginTop: '0.5rem', marginLeft: '1rem', marginBottom: '1rem', width: '20rem'}}
          /><button 
              style={{ marginLeft: '1rem', padding: '0.5rem'}}>중복확인</button><br/>
        </label>

        <label>
          PW : 
          <input
            name="NewPW"
            value={NewPW || "4자리 비밀번호를 입력해주세요."}
            onChange={(e) => setNewPW(e.target.value)}
            style={{ padding: '1rem', marginTop: '0.5rem', marginLeft: '1rem', marginBottom: '1rem', width: '20rem'}}
          />
        </label>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Button1 onClick={handleSignup}>회원가입하기</Button1>
      </div>
    </div>
  );
}

export default SignupPage;