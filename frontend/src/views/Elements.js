import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button1 from '../components/Button1';
import Element from '../components/Element.js';

function YourMainComponent() {
  const navigate = useNavigate();

  // ElementList를 각각의 변수에 할당
  const [posElementList, setPosElementList] = useState([]);
  const [negElementList, setNegElementList] = useState([]);

  const handlePrompt = () => {
    console.log('Positive ElementList:', posElementList);
    console.log('Negative ElementList:', negElementList);

    setTimeout(() => {
      navigate('/Sentiments');
    }, 500);
  };

  const backtoPreviousPage = () => {
    setTimeout(() => {
      navigate('/PaintingStylePage');
    }, 500);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <h1>On the cover of your album</h1>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div>
          <h3>Include...</h3>
          <Element listName='PosElements' onListChange={setPosElementList} />
        </div>
        <div>
          <h3>Exclude...</h3>
          <Element listName='NegElements' onListChange={setNegElementList} />
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Button1 onClick={backtoPreviousPage}>&#171;&#171; 이전으로 돌아가기</Button1>
        <Button1 onClick={handlePrompt} style={{ marginLeft: '3rem' }}>
          다음으로 넘어가기 &#187;&#187;
        </Button1>
      </div>
    </div>
  );
}

export default YourMainComponent;




