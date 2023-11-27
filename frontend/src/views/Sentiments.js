import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { usePromptContext } from '../contexts/PromptContext.js';
import Button1 from '../components/Button1';
import Element from '../components/Element.js';
import { useUser } from '../contexts/UserContext';


const Sentiments = () => {
  const { sharedData, updateSharedData } = usePromptContext();
  const navigate = useNavigate();
  const { user } = useUser();


  // SentimentList를 각각의 변수에 할당
  const [posSentimentList, setPosSentimentList] = useState([]);

  const handlePrompt = async () => {
    try {
      console.log('posSentimentList:', posSentimentList);

      const updatedData = {
        ...sharedData.data,
        'posSentimentList': posSentimentList ? [posSentimentList].join(', ') : '', // Use ', ' as a separator
      };
  
      updateSharedData(sharedData.message, updatedData);
  
      setTimeout(() => {
        console.log('updated Data:', updatedData);
      }, 500);

      setTimeout(() => {
        console.log('Shared Data:', sharedData);
      }, 500);

      console.log('title:', sharedData.data.Title);
      console.log('singer:', sharedData.data.Singer);
      console.log('selectedGenre:', sharedData.data.selectedGenre);
      console.log('print_title:', sharedData.data.print_title);
      console.log('posSentimentList', sharedData.data.posSentimentList);

      // 백엔드로 데이터 전송
      const response = await fetch('http://127.0.0.1:8000/cover', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${user.token}`,
        },
        body: JSON.stringify({
          "title": sharedData.data.Title,
          "singer": sharedData.data.Singer,       
          "print_title": sharedData.data.print_title,
          "print_singer": sharedData.data.print_singer,
          "genre": sharedData.data.selectedGenre,
          "style": sharedData.data.selectedPaintingStyle,
          "positive_element": sharedData.data.posElementList,
          "positive_sentiment": sharedData.data.posSentimentList,          
          "url": sharedData.data.url,
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




