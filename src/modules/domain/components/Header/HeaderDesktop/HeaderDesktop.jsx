import React from 'react';
import s from './HeaderDesktop.module.scss';

const HeaderDesktop = () => {
    return(
        <>
            <div className={s.Header}>
                <div className={s.Container}>
                    <div>menu</div>
                    <div>signIN</div>
                </div>
            </div>
        </>
    );
};

export default HeaderDesktop;