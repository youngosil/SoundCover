import React, {useState} from 'react';
import '../Mainpage.css';
import { useNavigate } from 'react-router-dom';
import Button1 from '../components/Button1';

const MainPage = () => {
    const navigate = useNavigate();
  
    const goToLoginPage = () => {
      navigate('/LoginPage');
    };
    

    return (
        /*웹 사이트 소개 */
        <div style={{position: 'relative', marginTop: '70%', marginBottom: '30px', marginLeft: '100px'}}>
            <img src="images/albums.png" style={{ width: '1000px', height: '300px'}} alt="Albums" />
            <img src="images/headphone.png" style={{ width: '158px', height: '137px', position: 'relative', top: '-200px', left: '-200px' }} alt="Headphones" />
            <img src="images/cardset.png" style={{ width: '180px', height: '200px', position: 'relative', top: '-400px', left: '-10px'  }} alt="Card Set" />
            <img src="images/horse.png" style={{ width: '150px', height: '169px', position: 'relative', top: '-120px' }} alt="Horse" />
            <img src="images/cd.png" style={{ width: '125px', height: '133px', position: 'relative', top: '-480px' }} alt="CD" />
            <img src="images/jellyfish.png" style={{ width: '200px', height: '270px', position: 'relative', top: '-100px', left: '250px' }} alt="Jellyfish" />
                <h2>Welcome to SOUNDCOVER</h2>
                <h3>You can make your own album cover using AI model. 
                    Just give us your description of your album!</h3>

            <div style={{marginTop: '60px', marginBottom: '60px'}}>
                <Button1 onClick={goToLoginPage}>Make Album Cover</Button1>
            </div>
            <div>
            {[62, 811, 63, 91, 211, 92].map((index) => (
            <img
                key={index}
                src={`http://www.acclaimedmusic.net/images/A${index}.jpg`}
                alt={`Trend ${index}`}
                className='trend-image'
            />
            ))}
            </div>
            <div>
            {[61, 241, 31, 391, 122, 93].map((index) => (
            <img
                key={index}
                src={`http://www.acclaimedmusic.net/images/A${index}.jpg`}
                alt={`Trend ${index}`}
                className='trend-image'
            />
            ))}
            </div>

            <div>
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