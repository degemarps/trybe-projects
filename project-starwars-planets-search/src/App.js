import React from 'react';
import './App.css';
import MainPage from './components/mainPage';
import StarProvider from './context/StarProvider';

function App() {
  return (
    <StarProvider>
      <MainPage />
    </StarProvider>
  );
}

export default App;
