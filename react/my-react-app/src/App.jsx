import React, { useEffect, useState } from 'react';
import ColorfulMessage from './components/ColorfulMessage';

const App = () => {
  const[num,setNum] = useState(0);
  const[faceShowFlag,setFaceShowFlag] = useState(false)

  const onClickCountUp = () =>{
    setNum(num+1);
  };

  const onClickSwitchShowFlag = () =>{
    setFaceShowFlag(!faceShowFlag);
  };

  useEffect(() =>{
    if(num % 3 === 0 && num > 0){
      faceShowFlag ||  setFaceShowFlag(true);
    }else{
      faceShowFlag &&  setFaceShowFlag(false);
    }
  },[num]);

  return (
    <React.Fragment>
      <h1 style={{ color: 'red' }}>こんにちは</h1>
      <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
      <ColorfulMessage color="pink">お元気ですか？</ColorfulMessage>
      <button onClick={onClickCountUp}>カウントアップ</button>
      <br/>
      <button onClick={onClickSwitchShowFlag}>on/off</button>
      <p>{num}</p>

      {faceShowFlag &&  <p>(^ ^)</p> }

    </React.Fragment>
  );
};

export default App;
