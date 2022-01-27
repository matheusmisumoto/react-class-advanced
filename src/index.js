import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ErrorBoundary from './error-boundary';
import { BrowserRouter } from 'react-router-dom';

const main = (
  <ErrorBoundary>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ErrorBoundary>
)

ReactDOM.render(main, document.getElementById('root'));
