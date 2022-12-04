import React from 'react';
//import classNames from 'classnames';
import s from './HeaderMobile.module.scss';
import HeaderMobileMenu from './HeaderMobileMenu';

const HeaderMobile = () => {
    return(
        <>
            <div className={s.Container} id='outer-container'>
                <HeaderMobileMenu pageWrapId={'pageWrap'} outerContainerId={'outer-container'} />
                <div className={s.Container_beginBox}><a href='#'>HEADER</a></div>
                <div className={s.Container_endBox}>
                    <div className={s.SwitchButton}><a href='#'>but</a></div>
                    <div><a href='#'>HAM</a></div>
                </div>
            </div>
        </>
    );
};

export default HeaderMobile;