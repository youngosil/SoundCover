import React, { useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import Button1 from '../components/Button1';


function LandingPage() {
  const navigate = useNavigate();

  const goToMainpage = () => {
    navigate('/MainPage');
  };

  const txt = 'SOUNDCOVER'
  const [text, setText] = useState('');
  const [count, setCount] = useState(0);

  useEffect( () => {
    const interval = setInterval(() => {
      setText(text + txt[count]);
      setCount(count+1);
    }, 200);
    if (count === txt.length) {
      clearInterval(interval);
    }
    return () => clearInterval(interval)
    })


  return (
    <div style={{ width: '100%', margin: '0', height: '100%'}}>
      {/* main image */}
      <div style={{ width: '100%', margin: '1rem auto' }}>
        <h2 style={{ fontSize: '5rem' }}>{text}</h2>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Button1 style={{ width: '10rem', fontFamily: 'Montserrat', fontWeight: 'bold', fontSize: '20px'}} onClick={goToMainpage}>Start</Button1>
      </div>
    </div>
  );
}

export default LandingPage;
