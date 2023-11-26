import React, {useState, useRef, useEffect} from 'react';
import '../Mainpage.css';
import { useNavigate } from 'react-router-dom';
import Button1 from '../components/Button1';
import Button2 from '../components/Button2';
const PaintingStylePage = () => {

    const navigate = useNavigate();

    const [selectedPaintingStyles, setSelectedPaintingStyles] = useState([]);

    const handlePaintingStyleClick = (PaintingStyle) => {
      // Toggle the selection of the PaintingStyle
      const updatedPaintingStyles = selectedPaintingStyles.includes(PaintingStyle)
        ? selectedPaintingStyles.filter((selectedPaintingStyle) => selectedPaintingStyle !== PaintingStyle)
        : [...selectedPaintingStyles, PaintingStyle];
  
      setSelectedPaintingStyles(updatedPaintingStyles);
    };


    const handlePrompt = () => {
      console.log('Selected Painting Styles', selectedPaintingStyles);
    
      setTimeout(() => {
        navigate('/Elements');
      }, 500);
    };

    const backtoPreviousPage = () => {
      setTimeout(() => {
        navigate('/PaintingStylePage');
      }, 500)
    };

    return (
        <div>
            <div>
              <h1>Choose the painting style of your album</h1>
              <h4>Multiple responses are possible</h4>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
              {['impressionistic', 'surrealistic', 'pop art', 'realistic', 'cartoon-style', 'oil painting', 'watercolor painting'].map((PaintingStyle) => (
                <Button2
                  key={PaintingStyle}
                  selected={selectedPaintingStyles.includes(PaintingStyle)}
                  onClick={() => handlePaintingStyleClick(PaintingStyle)}
                >
                  {PaintingStyle}
                </Button2>
              ))}
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