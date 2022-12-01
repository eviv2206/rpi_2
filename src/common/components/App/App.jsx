import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Domain from '../../../modules/domain';

const App = () => {
    return (
        <Routes>
            <Route path='/' element={<Navigate to='domain'/>}/>
            <Route path='/domain/*' element={<Domain/>}/>
        </Routes>
    );
};

export default App;