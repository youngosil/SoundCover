import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button1 from '../components/Button1';
import Button2 from '../components/Button2';

const GenrePage = () => {
  const navigate = useNavigate();

  const [selectedGenres, setSelectedGenres] = useState([]);

  const handleGenreClick = (genre) => {
    // Toggle the selection of the genre
    const updatedGenres = selectedGenres.includes(genre)
      ? selectedGenres.filter((selectedGenre) => selectedGenre !== genre)
      : [...selectedGenres, genre];

    setSelectedGenres(updatedGenres);
  };

  const handlePrompt = () => {
    // Send selected genres to the backend
    console.log('Selected Genres:', selectedGenres);

    // Redirect to the next page after some delay
    setTimeout(() => {
      navigate('/PaintingStylePage');
    }, 500);
  };

  return (
    <div>
      <div>
        <h1>Choose the genre of your album</h1>
        <h4>Multiple responses are possible</h4>
      </div>
      <div>
        {['Pop', 'Rock', 'Punk', 'Hip-Hop', 'Jazz', 'Folk'].map((genre) => (
          <Button2
            key={genre}
            selected={selectedGenres.includes(genre)}
            onClick={() => handleGenreClick(genre)}
          >
            {genre}
          </Button2>
        ))}
      </div>
      <div>
        <Button1 onClick={handlePrompt}>
          다음으로 넘어가기 &#187;&#187;
        </Button1>
      </div>
    </div>
  );
};

export default GenrePage;
