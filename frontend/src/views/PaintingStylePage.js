import React, {useState, useRef, useEffect} from 'react';
import '../Mainpage.css';
import { useNavigate } from 'react-router-dom';
import Button1 from '../components/Button1';
import Button2 from '../components/Button2';
const PaintingStylePage = () => {

    const navigate = useNavigate();

    const handlePrompt = () => {
        //console.log('Prompt1:', Prompt1);
    
        setTimeout(() => {
          navigate('/Elements');
        }, 500);
      };

    const backtoPreviousPage = () => {
        setTimeout(() => {
          navigate('/GenrePage');
        }, 500)
      };

    return (
        <div>
            <div>
                <h2>Choose your PaintingStyle</h2>
            </div>
            <div>
                <Button2>Realism</Button2>
                <Button2>Painterly</Button2>
                <Button2>Impressionism</Button2>
                <Button2>Expressionism and Fauvism</Button2>
            </div>
            <div>
                <Button2>Abstraction</Button2>
                <Button2>Abstract</Button2>
                <Button2>Photorealism</Button2>
            </div>
            <div style = {{ display: 'flex', justifyContent: 'space-between' }}>
                <Button1 onClick={backtoPreviousPage}>&#171;&#171; 
                이전으로 돌아가기
                </Button1>
                <Button1 onClick={handlePrompt} style = {{ marginLeft: '3rem' }}>
                다음으로 넘어가기 &#187;&#187; 
                </Button1>
            </div>

        </div>
    )


}

export default PaintingStylePage;