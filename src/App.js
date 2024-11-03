// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RequestInput from './components/Home/RequestInput'; 

function App() {
  return (
    <Router>
      <div className="App">
        <h1 style={{ fontSize: '25px', textAlign: 'center', color: '#FFFFFF' }}>{/* */} </h1>
        <Routes>
          <Route path="/" element={<RequestInput />} />
          {/* 추가적인 경로가 필요할 경우 여기에 Route를 추가 */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;