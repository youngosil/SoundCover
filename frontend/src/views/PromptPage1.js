import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button1 from '../components/Button1';

function PromptPage1() {
    const navigate = useNavigate();
  
    const goToLoginPage = () => {
      navigate('/LoginPage');
    };

    return (
        <div>
            <div style={{marginTop: '120%', marginBottom: '50px'}}>
                <h2 style={{ fontSize: '5rem' }}>프롬프트1</h2>
            </div>

            <div>
                <Button1 onClick={goToLoginPage}>다음으로 넘어가기</Button1>
            </div>
        </div>
    );
}

export default PromptPage1;