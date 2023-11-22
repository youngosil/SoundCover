import React, {useState, useRef, useEffect} from 'react';
import '../Mainpage.css';
import { useNavigate } from 'react-router-dom';
import Button1 from '../components/Button1';
import Button2 from '../components/Button2';

const GenrePage = () => {

    const navigate = useNavigate();

    const handlePrompt = () => {
        //console.log('Prompt1:', Prompt1);
    
        setTimeout(() => {
          navigate('/PaintingStylePage');
        }, 500);
      };

    return (
        <div>
            <div>
                <h2>Choose your Genre</h2>
            </div>
            <div>
                    <Button2>K-pop</Button2>
                    <Button2>Rock</Button2>
                    <Button2>Ballad</Button2>
                    <Button2>Hip Hop</Button2>
                    <Button2>R&B</Button2>
            </div>
            <div>
                    <Button2>K-pop</Button2>
                    <Button2>Rock</Button2>
                    <Button2>Ballad</Button2>
                    <Button2>Hip Hop</Button2>
                    <Button2>R&B</Button2>
            </div>
            <div>
                <Button1 onClick={handlePrompt}>
                    다음으로 넘어가기 &#187;&#187; 
                </Button1>
            </div>
        </div>
    )


}

export default GenrePage;