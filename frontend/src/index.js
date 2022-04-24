import React from 'react';
import * as ReactDomClient from 'react-dom/client';
import App from './components/App';
import reportWebVitals from './tests/reportWebVitals';
import './assets/index.scss';

ReactDomClient
    .createRoot(document.getElementById('root'))
    .render(<App/>)

reportWebVitals();
