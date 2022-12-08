import React from 'react';
import s from './NothingFound.module.scss';

const NothingFound = () => {
    return (
        <>
            <div className={s.Container}>
                <div className={s.Container_NothingFoundField}>
                    <h2>Ooops..</h2>
                    <p>It looks like nothing was found.</p>
                </div>
            </div>
        </>
    );
};

export default NothingFound;