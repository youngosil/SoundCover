import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { usePromptContext } from '../contexts/PromptContext';
import Button1 from '../components/Button1';
import Header from '../components/Header';

const TitleSinger = () => {
    
  const [Title, setTitle] = useState('');
  const [Singer, setSinger] = useState('');

  const navigate = useNavigate();
  const { sharedData, updateSharedData } = usePromptContext();

  const handlePrompt = () => {
    console.log('Title:', Title);
    console.log('Singer:', Singer);
    console.log('print_title:',true);
    console.log('print_singer:', true);

    const updatedData = {
      ...sharedData.data,'Title': Title|| '',
      ...sharedData.data,'Singer': Singer|| '',
      ...sharedData.data,'print_title': true|| '',
      ...sharedData.data,'print_singer': true|| '',
      ...sharedData.data,'url':'/administrator',
    };

    updateSharedData(sharedData.message, updatedData);
    
    setTimeout(() => {
      navigate('/GenrePage');
    }, 500);
  };


  return (
    <div>

      <div>
        <Header/>
      </div>

      <div style={{ width: '100%', margin: '1rem auto' }}>
        <label>
          <h1>What's your title ?</h1>
          <input
            name="Title"
            placeholder='( your album title )'
            value={Title}
            onChange={(e) => setTitle(e.target.value)}
            style={{ padding: '1rem', marginTop: '0.5rem', marginBottom: '1rem', width: '20rem', fontFamily: 'Montserrat'}}
          />
        </label>
        <label>
          <h1>What's your singer name ?</h1><br/>
          <input
            name="Singer"
            placeholder='( your singer name )'
            value={Singer}
            onChange={(e) => setSinger(e.target.value)}
            style={{ padding: '1rem', marginTop: '0.5rem', marginBottom: '1rem', width: '20rem', fontFamily: 'Montserrat'}}
          />
        </label>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Button1 onClick={handlePrompt}>다음으로 넘어가기 &#187;&#187;</Button1>
      </div>

    </div>
  );
};

export default TitleSinger;