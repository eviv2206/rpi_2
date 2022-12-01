import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.module.scss';
import { BrowserRouter } from 'react-router-dom';
import App from './common/components/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>
);
