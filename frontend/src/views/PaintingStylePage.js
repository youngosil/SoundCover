import React, {useState, useRef, useEffect} from 'react';
import '../Mainpage.css';
import Button1 from '../components/Button1';
const PaintingStylePage = () => {

    return (
        <><><div>
            <h2>Choose your PaintingStyle</h2>
        </div><div>
                <Button1>Realism</Button1>
                <Button1>Painterly</Button1>
                <Button1>Impressionism</Button1>
                <Button1>Expressionism and Fauvism</Button1>
            </div></><div>
                <Button1>Abstraction</Button1>
                <Button1>Abstract</Button1>
                <Button1>Photorealism</Button1>
            </div></>
    )


}

export default PaintingStylePage;