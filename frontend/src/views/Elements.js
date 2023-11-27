import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { usePromptContext } from '../contexts/PromptContext';
import Button1 from '../components/Button1';
import Element from '../components/Element.js';

function Elements() {
  const { sharedData, updateSharedData } = usePromptContext();
  const navigate = useNavigate();

  // ElementList를 각각의 변수에 할당
  const [posElementList, setPosElementList] = useState([]);

  const handlePrompt = () => {
    console.log('posElementList:', posElementList);
    
    const updatedData = {
      ...sharedData.data,
      'posElementList': posElementList ? [posElementList].join(', ') : '', // Use ', ' as a separator
    };

    updateSharedData(sharedData.message, updatedData);

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
      </div>
      <div style={{ width: '100%', display: 'flex', alignItems:'center', }}>
        <Button1 onClick={backtoPreviousPage}>&#171;&#171; 이전으로 돌아가기</Button1>
        <Button1 onClick={handlePrompt} style={{ marginLeft: '3rem' }}>
          다음으로 넘어가기 &#187;&#187;
        </Button1>
      </div>
    </div>
  );
}

export default Elements;




