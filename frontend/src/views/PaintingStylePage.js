import React, { useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { usePromptContext } from '../contexts/PromptContext';
import Button1 from '../components/Button1';
import Button2 from '../components/Button2';
import Header from '../components/Header';

const PaintingStylePage = () => {
  const { sharedData, updateSharedData } = usePromptContext();
  const navigate = useNavigate();

  const [selectedPaintingStyle, setSelectedPaintingStyle] = useState('');

  const handlePaintingStyleClick = (paintingstyle) => {
    // Toggle the selection of the PaintingStyle
    const updatedPaintingStyle = selectedPaintingStyle === paintingstyle ? '' : paintingstyle;

    setSelectedPaintingStyle(updatedPaintingStyle);
  };


  const handlePrompt = () => {
    console.log('selectedPaintingStyle:', selectedPaintingStyle);

    const updatedData = {
      ...sharedData.data,
      'selectedPaintingStyle': selectedPaintingStyle || '',
    };

    updateSharedData(sharedData.message, updatedData);
    
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
          <Header/>
            <div>
              <h1>Choose the painting style of your album</h1>
              <h4>Only one response is possible</h4>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
              {['impressionistic', 'surrealistic', 'pop art', 'realistic', 'cartoon-style', 'oil painting', 'watercolor painting'].map((paintingstyle) => (
                <Button2
                  key={paintingstyle}
                  selected={selectedPaintingStyle === paintingstyle}
                  onClick={() => handlePaintingStyleClick(paintingstyle)}
                  >
                  {paintingstyle}
                </Button2>
              ))}
            </div>
            <div style = {{ display: 'flex', justifyContent: 'space-between' }}>
                <Button1 onClick={backtoPreviousPage}>&#171;&#171; 
                Previous page
                </Button1>
                <Button1 onClick={handlePrompt} style = {{ marginLeft: '3rem' }}>
                Next page &#187;&#187; 
                </Button1>
            </div>

        </div>
    )


}

export default PaintingStylePage;