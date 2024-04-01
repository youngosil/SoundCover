import React, {useState, useRef, useEffect} from 'react';
import '../styles/MainPage.css';
import { useNavigate } from 'react-router-dom';
import Button1 from '../components/Button1';

const MainPage = () => {
    const navigate = useNavigate();
  
    const goToLoginPage = () => {
      navigate('/LoginPage');
    };
    
    /* 애니메이션 구현 */
    //const trendImagesRef = useRef([]);

    return (
        // 웹 사이트 소개 
        // 상단 이미지 구성
        <div style={{position: 'relative', maxWidth: '1200px', margin: 'auto'}}>
            <div style={{width: '100%', marginTop: '100%'}}>
                <img src="images/mainpage_cover_image.png" style={{ width: '100%', height: '100%'}} alt="Albums" />
                <div style={{margin: '100px', textAlign: 'center'}}>
                    <h2 style={{fontSize: '3rem', display: 'flex', justifyContent: 'center', fontFamily: 'AestheticRegular-8M5dM', color: '#C7FCEB'}}>Welcome to SOUNDCOVER</h2>
                    <h3 style={{fontSize: '1.5rem', display: 'flex', justifyContent: 'center', fontFamily: 'Nephilm', }}>
                        You can make <br/>your own album cover <br/>using AI model.<br/><br/><br/>
                        Just give us <br/>your description <br/>of your album !
                    </h3>
                </div>
            </div>
            <div style={{marginTop: '60px', marginBottom: '60px', display: 'flex', justifyContent: 'center'}}>
                <Button1 onClick={goToLoginPage} style={{width: '500px'}}>Make Album Cover</Button1>
            </div>

            {/* 하단 앨범 이미지 구성 및 애니메이션*/}
            <div style={{ display: 'flex', justifyContent: 'center'}}>
            {[62, 811, 63, 91, 211, 92].map((index) => (
            <img
                key={index}
                src={`http://www.acclaimedmusic.net/images/A${index}.jpg`}
                alt={`Trend ${index}`}
                className='trend-image'
            />
            ))}
            </div>
            <div style={{ display: 'flex', justifyContent: 'center'}}>
            {[61, 241, 31, 391, 122, 93].map((index) => (
            <img
                key={index}
                src={`http://www.acclaimedmusic.net/images/A${index}.jpg`}
                alt={`Trend ${index}`}
                className='trend-image'
            />
            ))}
            </div>

            <div style={{ display: 'flex', justifyContent: 'center'}}>
            {[5541, 721, 242, 273, 333, 543].map((index) => (
            <img
                key={index}
                src={`http://www.acclaimedmusic.net/images/A${index}.jpg`}
                alt={`Trend ${index}`}
                className='trend-image'
            />
            ))}
            </div>
        </div>
    );
}

export default MainPage;