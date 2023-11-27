import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import imagesData from '../components/imagesData';
import { usePromptContext } from '../contexts/PromptContext';
import Button1 from '../components/Button1';

const TrendingOn = () => {
    const { sharedData, updateSharedData } = usePromptContext();
    const navigate = useNavigate();

    const [selectedImages, setSelectedImages] = useState([]);

    const handleImageClick = (image) => {
        const isSelected = selectedImages.some((selectedImage) => selectedImage.id === image.id)

        if (isSelected) {
            // 이미 선택된 이미지라면 선택 해제
            const updatedSelection = selectedImages.filter((selectedImage) => selectedImage.id !== image.id);
            setSelectedImages(updatedSelection);
        } else {
            // 선택되지 않은 이미지라면 선택 추가
            setSelectedImages([...selectedImages, image]);
        }
    };

    const handlePrompt = () => {
        console.log('Selected Sites', selectedImages.map((selectedImage) => selectedImage.site));
        
        const updatedData = {
          ...sharedData.data,
          'Selected sites': selectedImages.map((selectedImage) => selectedImage.site),
        };
      
        updateSharedData(sharedData.message, updatedData);
        
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
        <div style={{fontFamily:'Montserrat'}}>
          <h1>Choose the style of your album</h1>
          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {imagesData.map((image) => (
              <div
                key={image.id}
                onClick={() => handleImageClick(image)}
                style={{
                  margin: '10px',
                  cursor: 'pointer',
                }}
              >
                <img
                  src={image.src}
                  alt={image.site}
                  style={{ width: '150px', height: '100px', objectFit: 'cover' }}
                />
                <p style={{ textAlign: 'center' }}>{image.site}</p>
              </div>
            ))}
          </div>
          <div>
            <h2>Selected Images</h2>
            <ul>
              {selectedImages.map((selectedImage) => (
                <li key={selectedImage.id}>{selectedImage.site}</li>
              ))}
            </ul>
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
      );
    };


export default TrendingOn;