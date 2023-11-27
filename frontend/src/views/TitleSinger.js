import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { usePromptContext } from '../contexts/PromptContext';
import Button1 from '../components/Button1';

const TitleSinger = () => {
    
  const [Title, setTitle] = useState('');
  const [Singer, setSinger] = useState('');

  const navigate = useNavigate();
  const { sharedData, updateSharedData } = usePromptContext();

  const handlePrompt = () => {
    console.log('Title:', Title);
    console.log('Singer:', Singer)

    const updatedData = {
      ...sharedData.data,'Title': Title|| '',
      ...sharedData.data,'Singer': Singer|| ''
    };

    updateSharedData(sharedData.message, updatedData);
    
    setTimeout(() => {
      navigate('/Elements');
    }, 500);
  };


  return (
    <div style={{ width: '100%', margin: '0', fontFamily: 'Montserrat'}}>
        <div style={{ width: '100%', margin: '1rem auto'}}>
            <label style={{ display: 'flex', alignItems: 'center' }}>
                <h1>What's your title ?</h1>
                <input
                    name="Title"
                    placeholder='Your album title'
                    value={Title}
                    onChange={(e) => setTitle(e.target.value)}
                    style={{ padding: '1rem', marginTop: '0.5rem', marginLeft: '1.7rem', marginBottom: '1rem', width: '20rem'}}
                />
            </label>
            <label style={{ display: 'flex', alignItems: 'center' }}>
                <h1>What's your singer name ?</h1>
                <input
                    name="Singer"
                    placeholder='Your singer name'
                    value={Singer}
                    onChange={(e) => setSinger(e.target.value)}
                    style={{ padding: '1rem', marginTop: '0.5rem', marginLeft: '1.7rem', marginBottom: '1rem', width: '20rem'}}
                />
            </label>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Button1 onClick={handlePrompt}>Send data</Button1>
        </div>
    </div>
  );
};

export default TitleSinger;