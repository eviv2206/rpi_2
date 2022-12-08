import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';

import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpApi from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

import './index.module.scss';
import App from './common/components/App';
import { Suspense } from 'react';
i18next
    .use(initReactI18next)
    .use(LanguageDetector)
    .use(HttpApi)
    .init({
        supportedLngs: ['ru', 'en'],
        fallbackLng: 'en',
        //lng: document.querySelector('html').lang,
        // Options for language detector
        detection: {
            order: ['cookie', 'htmlTag', 'localStorage', 'path'],
            caches: ['cookie'],
        },
        // react: { useSuspense: false },
        backend: {
            //loadPath: 'D:/rpi3/rpi_2/src/assets/locales/{{lng}}/translation.json',
            loadPath: 'src/assets/locales/{{lng}}/translation.json',
            //'src/assets/locales/{{lng}}}/translation.json'
        },
    });

const loadingMarkup = (
    <div className="py-4 text-center">
        <h3>Loading..</h3>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Suspense fallback={loadingMarkup}>
        <React.StrictMode>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </React.StrictMode>
    </Suspense>
);
