import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { containerStyle, labelStyle } from '../styles';
import Button1 from '../components/Button1'


function Sentiments() {
    const [PosSentiment1, setPosSentiment1] = useState('');
    const [NegSentiment1, setNegSentiment1] = useState('');
    
    const navigate = useNavigate();

    const gotoNextPage = () => {
        console.log('PosSentiment1:', PosSentiment1);
        console.log('NegSentiment1:', NegSentiment1)
    
        setTimeout(() => {
          navigate('/ExtractedAlbumsPage');
        }, 500)
      };
    
      const backtoPreviousPage = () => {
        setTimeout(() => {
          navigate('/Elements');
        }, 500)
      };
    
    return (
        <div style={containerStyle}> {/*style.js에 css처럼 기재*/}
          <label style={labelStyle}>
            000님,<br />
          </label>
          <label>
            지금까지의 항목들 이외에 추가/제외하고 싶은 것이 있나요?<br />
          </label>

          <div style = {{ display: 'flex', justifyContent: 'space-between' }}>
            <input
                name="PosSentiment1"
                placeholder="(free spirit)"
                value={PosSentiment1}
                onChange={(e) => setPosSentiment1(e.target.value)}
                style={{ padding: '1rem', margin: '2rem', width: '300px', height: '10%' }}
            />

            <input
                name="NegSentiment1"
                placeholder="(sad spirit)"
                value={NegSentiment1}
                onChange={(e) => setNegSentiment1(e.target.value)}
                style={{ padding: '1rem', margin: '2rem', width: '300px', height: '10%' }}
            />
          </div>
          

          <div style = {{ display: 'flex', justifyContent: 'space-between' }}>
            <Button1 onClick={backtoPreviousPage}>&#171;&#171; 
              이전으로 돌아가기
            </Button1>
            <Button1 onClick={gotoNextPage} style = {{ marginLeft: '3rem' }}>
              다음으로 넘어가기 &#187;&#187; 
            </Button1>
          </div>
        </div>
    
      );
    }
    
export default Sentiments;