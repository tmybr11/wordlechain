import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Game from './components/Game';
import { GameProvider } from './context/GameProvider';
import reportWebVitals from './reportWebVitals';

import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <GameProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="daily" element={<Game rows_number="6" />} />
        </Routes>
      </BrowserRouter>
    </GameProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
