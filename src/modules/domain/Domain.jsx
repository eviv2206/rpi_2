import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Landing from './pages/Landing';
import Header from './components/Header';
import Footer from './components/Footer';
import Author from './pages/Author/';
import AllAuthors from './pages/AllAuthors';

const Domain = () => {
    return(<>
        <Header/>
        <Routes>
            <Route path='/' element={<Navigate to={'home'}/>}/>
            <Route path='/home' element={<Landing/>}/>
            <Route path='/author' element={<Author/>}/>
            <Route path='/authors' element={<AllAuthors/>}/>
        </Routes>
        <Footer/>
    </>
    );
};

export default Domain;