import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { containerStyle, labelStyle } from '../styles';
import Button1 from '../components/Button1'


function Elements() {
    const [PosElement1, setPosElement1] = useState('');
    const [NegElement1, setNegElement1] = useState('');
    
    const navigate = useNavigate();

    const gotoNextPage = () => {
        console.log('PosElement1:', PosElement1);
        console.log('NegElement1:', NegElement1)
    
        setTimeout(() => {
          navigate('/Sentiments');
        }, 500);
      };
    
      const backtoPreviousPage = () => {
        setTimeout(() => {
          navigate('/GenrePage');
        }, 500)
      };
    
    return (
        <div style={containerStyle}> {/*style.js에 css처럼 기재*/}
          <label style={labelStyle}>
            000님,<br />
          </label>
          <label>
            앨범 커버에 꼭 포함시키고 싶은 요소를 기재해주세요.<br />
          </label>

          <div style = {{ display: 'flex', justifyContent: 'space-between' }}>
            <input
                name="PosElement1"
                placeholder="(a black cat among a crosswalk in New York City)"
                value={PosElement1}
                onChange={(e) => setPosElement1(e.target.value)}
                style={{ padding: '1rem', margin: '2rem', width: '300px', height: '10%' }}
            />

            <input
                name="NegElement1"
                placeholder="(human hand)"
                value={NegElement1}
                onChange={(e) => setNegElement1(e.target.value)}
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
    
export default Elements;