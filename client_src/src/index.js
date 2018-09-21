import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../node_modules/popper.js/dist/umd/popper.js";        
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import AddCard from './Component/AddCard.js';
import CardDetails from './Component/CardDetais.js';

ReactDOM.render(<BrowserRouter>
    <App />
  </BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
