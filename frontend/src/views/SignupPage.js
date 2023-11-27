import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button1 from '../components/Button1';

function SignupPage() {
  //const [NewNickname, setNewNickname] = useState('');
  const [NewID, setNewID] = useState('');
  const [NewPW, setNewPW] = useState('');
  const [showErrorPopup, setShowErrorPopup] = useState(false); // 에러 여부 결정
  
  const navigate = useNavigate();

  const handleSignup = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/auth', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          //name: NewNickname,
          username: NewID,
          password: NewPW,
        }),
      });


      response
        .json()
        .then((data) => {
          if (!response.ok) {
            throw new Error('User creation failed');
          }

          // 성공적으로 생성된 경우에 대한 처리
          console.log(data.message);
          setTimeout(() => {
            navigate('/LoginPage');
          }, 500);
        })
        .catch((error) => {
          // 실패한 경우에 대한 처리
          console.error(error.message);
          setShowErrorPopup(true);
          // 페이지 새로 고침
          //window.location.reload();
        });
    } catch (error) {
      // 실패한 경우에 대한 처리
      console.error(error.message);
      // 페이지 새로 고침
      //window.location.reload();
    }
  };


  return (
    <div style={{ width: '100%', margin: '0', fontFamily: 'Montserrat'}}>
      <div style={{ width: '100%', margin: '1rem auto'}}>
        {/*<label>
          닉네임 :  
          <input
            name="NewNickname"
            placeholder='사용하고자 하는 닉네임을 입력해주세요.'
            value={NewNickname}
            onChange={(e) => setNewNickname(e.target.value)}
            style={{ padding: '1rem', marginTop: '0.5rem', marginLeft: '1rem', marginBottom: '1rem', width: '20rem'}}
          /><br />
        </label>*/}

        <label style={{ display: 'flex', alignItems: 'center' }}>
          ID :   
          <input
            name="NewID"
            placeholder='Enter your ID'
            value={NewID}
            onChange={(e) => setNewID(e.target.value)}
            style={{ padding: '1rem', marginTop: '0.5rem', marginLeft: '1.7rem', marginBottom: '1rem', width: '20rem'}}
          />
          <Button1 
            style={{ width: '150px',marginLeft: '1rem', padding: '0.7rem', marginTop: '0.5rem', marginBottom: '1rem'}}>Check duplication
            </Button1><br/>
        </label>

        <label>
          PW : 
          <input
            name="NewPW"
            placeholder='Enter your password'
            value={NewPW}
            onChange={(e) => setNewPW(e.target.value)}
            style={{ padding: '1rem', marginTop: '0.5rem', marginLeft: '1rem', marginBottom: '1rem', width: '20rem'}}
          />
        </label>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Button1 onClick={handleSignup}>Sign Up</Button1>
      </div>

      {/* 실패 시 에러 팝업*/}
      {showErrorPopup && (
        <h4 style={{ marginTop: '1rem', color: 'red', fontFamily:'Montserrat', textAlign:'center'}}>
          ID or password is not valid.
        </h4>
      )}

    </div>
  );
}

export default SignupPage;