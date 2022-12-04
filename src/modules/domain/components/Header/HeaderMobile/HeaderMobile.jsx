import React from 'react';
import s from './HeaderMobile.module.scss';
import HeaderMobileMenu from './HeaderMobileMenu';
import { Link } from 'react-router-dom';
import HEADER_DICTIONARY from '../Header.dictionary';


const {
    LABEL_LOGO,
    LABEL_MAIN,
    LABEL_LIST_AUTHORS,
    LABEL_INPUT_SURNAME,
} = HEADER_DICTIONARY;

const HeaderMobile = () => {
    return(
        <>
            <div className={s.Container} id='outer-container'>
                <HeaderMobileMenu pageWrapId={'pageWrap'} outerContainerId={'outer-container'} />
                <div className={s.Container_beginBox}><Link to='/domain'>{LABEL_LOGO}</Link></div>
                <div className={s.Container_endBox}>
                    <div className={s.SwitchButton}><a href='#'>but</a></div>
                </div>
            </div>
        </>
    );
};

export default HeaderMobile;