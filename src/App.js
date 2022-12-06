import React from 'react'
import './App.css'
import { useState } from 'react';

const App = () => {
  const [emoji, setEmoji] = useState("  😊 ");
  return (
    <>
      <div className="container">
        <h1> Emoji</h1>
      </div>
      <div className="emoji_box">
        <div className="emoji">{emoji}</div>
      </div>
      <div className="emoji_choose_container">
        <div
          onClick={() => {
            setEmoji(" 😊 ");
          }}
        >
          😊
        </div>
        <div
          onClick={() => {
            setEmoji(" 😎 ");
          }}
        >
          😎
        </div>
        <div
          onClick={() => {
            setEmoji(" 😯 ");
          }}
        >
          😯
        </div>
        <div
          onClick={() => {
            setEmoji(" 😈 ");
          }}
        >
          😈
        </div>
        
      </div>
     

    </>
  );
}

export default App;