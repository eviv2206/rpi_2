import React from 'react';
import useAuthors from '../hooks/useAuthors';
import AuthorElem from './components';
import s from './AllAuthors.module.scss';

const ALL_AUTHORS_LABEL = 'Список авторов:';

const AllAuthors = () => {
    const allAuthors = useAuthors();
    return (
        <div className={s.Container}>
            <div className={s.Container_Authors_label}>
                <h2>{ALL_AUTHORS_LABEL}</h2>
            </div>
            {
                allAuthors.map((man) => (
                    <AuthorElem key={man.author.id} man={man}/>
                ))
            }
        </div>
    );
};

export default AllAuthors;
