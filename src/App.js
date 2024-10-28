// src/App.js
import React from 'react';
import Review from './components/Review';

function App() {
  return (
    <div className="App">
      <h1 style={{ fontSize: '25px', textAlign: 'center', color:'#FFFFFF' }}>*Review*</h1>
      <Review />
    </div>
  );
}

export default App;
