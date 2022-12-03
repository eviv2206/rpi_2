import React from 'react';
import { useLocation } from 'react-router-dom';

const Author = () => {
    const author = useLocation().state.author;
    return(
        <>
            <div>{author.surname}</div>
            <div>Author page</div>
            <div>Author page</div>
            <div>Author page</div>
            <div>Author page</div>
            <div>Author page</div>
        </>
    );
};


export default Author;