import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { usePromptContext } from '../contexts/PromptContext.js';
import Button1 from '../components/Button1.js';
import Element from '../components/Element.js';
import { useUser } from '../contexts/UserContext.js';
import Header from '../components/Header.js';


const Sentiments = () => {
  const { sharedData, updateSharedData } = usePromptContext();
  const navigate = useNavigate();
  const { user } = useUser();

  const [loading, setLoading] = useState(false);

  // SentimentList를 각각의 변수에 할당
  const [posSentimentList, setPosSentimentList] = useState([]);

  const handlePrompt = async () => {
    try {
      setLoading(true);
      console.log('posSentimentList:', posSentimentList);

      const updatedData = {
        ...sharedData.data,
        'posSentimentList': posSentimentList ? [posSentimentList].join(', ') : '', // Use ', ' as a separator
      };
  
      updateSharedData(sharedData.message, updatedData);
  
      {/*setTimeout(() => {
        console.log('updated Data:', updatedData);
      }, 500);

      setTimeout(() => {
        console.log('Shared Data:', sharedData);
      }, 500);

      console.log('title:', sharedData.data.Title);
      console.log('singer:', updatedData.data.Singer);
      console.log('selectedGenre:', updatedData.data.selectedGenre);
      console.log('print_title:', updatedData.data.print_title);
      console.log('posSentimentList', updatedData.data.posSentimentList);*/}

      // 백엔드로 데이터 전송
      const response = await fetch('http://127.0.0.1:8000/cover', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${user.token}`,
        },
        body: JSON.stringify({
          "title": updatedData.Title,
          "singer": updatedData.Singer,       
          "print_title": updatedData.print_title,
          "print_singer": updatedData.print_singer,
          "genre": updatedData.selectedGenre,
          "style": updatedData.selectedPaintingStyle,
          "positive_element": updatedData.posElementList,
          "positive_sentiment": updatedData.posSentimentList,          
          "url": updatedData.url,
        }),
      });
  
      if (response.ok) {
        const result = await response.json();
        console.log('Data successfully sent to the server.',result);
        const resultUrl = result.url;
        setTimeout(() => {
          navigate('/ExtractedAlbumsPage', {state: {resultUrl}});
        }, 5000);
      } else {
        console.error('Failed to send data to the server.');
      }
   
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
    <div>
      <Header/>
      {/* Loading screen */}
      {/* 로딩이 true일 때 구현되는 코드*/}
      {loading && 
      <div 
        style={{ 
          fontSize: '50px', 
          textAlign: 'center', 
          marginTop: '20px' }}>
          Loading...
      </div>}
  
      {/* Main content */}
      {/* 로딩이 false일 때 구현되는 코드*/}
      {!loading && (
        <React.Fragment>
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
        </React.Fragment>
      )}
    </div>
  );
};

export default Sentiments;




