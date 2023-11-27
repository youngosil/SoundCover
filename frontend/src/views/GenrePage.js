import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { usePromptContext } from '../contexts/PromptContext';
import Button1 from '../components/Button1';
import Button2 from '../components/Button2';

const GenrePage = () => {
  const { sharedData, updateSharedData } = usePromptContext();
  const navigate = useNavigate();

  const [selectedGenre, setSelectedGenre] = useState('');

  const handleGenreClick = (genre) => {
    // Toggle the selection of the genre
    const updatedGenre = selectedGenre === genre ? '' : genre;

    setSelectedGenre(updatedGenre);
  };

  const handlePrompt = () => {
    // Send selected genre to the backend
    console.log('selectedGenre:', selectedGenre);

    const updatedData = {
      ...sharedData.data,
      'selectedGenre': selectedGenre || '', // Store as an empty string if not selected
    };
    
    updateSharedData(sharedData.message, updatedData);

    // Redirect to the next page after some delay
    setTimeout(() => {
      navigate('/PaintingStylePage');
    }, 500);
  };

  const backtoPreviousPage = () => {
    setTimeout(() => {
      navigate('/TitleSinger');
    }, 500)
  };

  return (
    <div>
      <div>
        <h1>Choose the genre of your album</h1>
        <h4>Only one response is possible</h4>
      </div>
      <div>
        {['Pop', 'Rock', 'Punk', 'Hip-Hop', 'Jazz', 'Folk'].map((genre) => (
          <Button2
            key={genre}
            selected={selectedGenre === genre}
            onClick={() => handleGenreClick(genre)}
          >
            {genre}
          </Button2>
        ))}
      </div>
      <div style = {{ display: 'flex', justifyContent: 'space-between' }}>
        <Button1 onClick={backtoPreviousPage}>&#171;&#171; 이전으로 돌아가기</Button1>
        <Button1 onClick={handlePrompt} style = {{ marginLeft: '3rem' }}>다음으로 넘어가기 &#187;&#187;</Button1>
      </div>
    </div>
  );
};

export default GenrePage;
