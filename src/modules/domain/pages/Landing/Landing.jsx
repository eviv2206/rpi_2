import React from 'react';
import DayAuthor from './components/DayAuthor';
import useDayAuthor from '../hooks/useDayAuthor';

const Landing = () => {
    const man = useDayAuthor();
    return (
        <>
            <DayAuthor man={man}/>
        </>
    );
};

export default Landing;