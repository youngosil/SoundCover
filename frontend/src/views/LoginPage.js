import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button1 from '../components/Button1';

function LoginPage() {
  const [postID, setPostID] = useState('');
  const [postPW, setPostPW] = useState('');

  const navigate = useNavigate();

  const handleLogin = () => {
    // 여기에서 로그인 처리 로직을 구현하고 postID, postPW 상태를 사용할 수 있음.
    console.log('postID:', postID);
    console.log('postPW:', postPW);

    setTimeout(() => {
      navigate('/PromptPage1');
    }, 2000) // 2초 후에 이동 -> 페이지 이동이 안됨 수정해야됨
  };

  return (
    <div style={{ width: '100%', margin: '0' }}>
      <div style={{ width: '100%', margin: '1rem auto' }}>
        <label>
          반갑습니다.<br />
          SOUNDCOVER 입니다.<br />
          <input
            name="postID"
            value={postID || "아이디를 입력해주세요."}
            onChange={(e) => setPostID(e.target.value)}
            style={{ padding: '1rem', marginTop: '0.5rem' }}
          /><br />
          <input
            name="postPW"
            value={postPW || "비밀번호를 입력해주세요."}
            onChange={(e) => setPostPW(e.target.value)}
            style={{ padding: '1rem', marginTop: '0.5rem' }}
          />
        </label>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Button1 onClick={handleLogin}>로그인</Button1>
        <Button1 style={{ backgroundColor: 'black', color: '#C7FCEB' }}>회원가입</Button1>
      </div>
    </div>
  );
}

export default LoginPage;
