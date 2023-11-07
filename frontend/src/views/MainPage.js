import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button1 from '../components/Button1';

function MainPage() {
    const navigate = useNavigate();
  
    const goToLoginPage = () => {
      navigate('/LoginPage');
    };

    return (
        <div>
            <div style={{marginTop: '120%', marginBottom: '50px'}}>
                <h2 style={{ fontSize: '5rem' }}>메인페이지입니다</h2>
                <h2 style={{ fontSize: '5rem' }}>메인페이지입니다</h2>
                <h2 style={{ fontSize: '5rem' }}>메인페이지입니다</h2>
            </div>

            <div>
                <Button1 onClick={goToLoginPage}>나만의 앨범 만들기</Button1>
            </div>

            <div>
                <h2 style={{ fontSize: '5rem' }}>메인페이지입니다</h2>
                <h2 style={{ fontSize: '5rem' }}>메인페이지입니다</h2>
                <h2 style={{ fontSize: '5rem' }}>메인페이지입니다</h2>
                <h2 style={{ fontSize: '5rem' }}>메인페이지입니다</h2>
                <h2 style={{ fontSize: '5rem' }}>메인페이지입니다</h2>
            </div>
        </div>
    );
}

export default MainPage;