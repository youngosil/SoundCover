import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { usePromptContext } from '../contexts/PromptContext.js';
import Button1 from '../components/Button1';
import Element from '../components/Element.js';

const Sentiments = () => {
  const { sharedData, updateSharedData } = usePromptContext();
  const navigate = useNavigate();

  // SentimentList를 각각의 변수에 할당
  const [posSentimentList, setPosSentimentList] = useState([]);
  const [negSentimentList, setNegSentimentList] = useState([]);

  const handlePrompt = async () => {
    try {
      console.log('Positive SentimentList:', posSentimentList);
      console.log('Negative SentimentList:', negSentimentList);
  
      const updatedData = {
        ...sharedData.data,
        'Positive SentimentList': posSentimentList,
        'Negative SentimentList': negSentimentList,
      };
  
      updateSharedData(sharedData.message, updatedData);
  
      console.log('Shared Data:', updatedData);
  
      // 백엔드로 데이터 전송
      const response = await fetch('http://127.0.0.1:8000/cover/cover', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          genre: updateSharedData.selectedGenres,
          trendingon: updateSharedData.selectedImagesKeywords,
          style: updateSharedData.selectedPaintingStyles,
          positive_element: updateSharedData.PosElementList,
          negative_element: updateSharedData.NegElementList,
          positive_sentiment: updateSharedData.posSentimentList,
          negative_sentiment: updateSharedData.negSentimentList,
        }),
      });
  
      if (response.ok) {
        console.log('Data successfully sent to the server.');
      } else {
        console.error('Failed to send data to the server.');
      }
  
      setTimeout(() => {
        navigate('/ExtractedAlbumsPage');
      }, 500);
    } catch (error) {
      console.error('An error occurred:', error);
    }
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
          나만의 앨범 만들기 &#187;&#187;
        </Button1>
      </div>
    </div>
  );
};

export default Sentiments;




