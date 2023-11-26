import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button1 from '../components/Button1';
import Element from '../components/Element.js';

function YourMainComponent() {
  const navigate = useNavigate();

  // SentimentList를 각각의 변수에 할당
  const [posSentimentList, setPosSentimentList] = useState([]);
  const [negSentimentList, setNegSentimentList] = useState([]);

  const handlePrompt = () => {
    console.log('Positive SentimentList:', posSentimentList);
    console.log('Negative SentimentList:', negSentimentList);

    setTimeout(() => {
      navigate('/ExtractedAlbumsPage');
    }, 500);
  };

  const backtoPreviousPage = () => {
    setTimeout(() => {
      navigate('/Sentiments');
    }, 500);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <h1>Additionally</h1>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div>
          <h3>Include...</h3>
          <Element listName='PosSentiments' onListChange={setPosSentimentList} />
        </div>
        <div>
          <h3>Exclude...</h3>
          <Element listName='NegSentiments' onListChange={setNegSentimentList} />
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




