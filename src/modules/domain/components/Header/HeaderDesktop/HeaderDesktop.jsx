import React from 'react';
import classNames from 'classnames';
import classNames from 'classnames';
import s from './HeaderDesktop.module.scss';

const HeaderDesktop = () => {
    return(
        <>
            <div className={s.Header}>
                <div className={s.Container}>
                    <div className={s.Container_beginBox}><a>HEADER</a></div>
                    <div className={s.Container_centerBox}>
                        <ul className={s.List}>
                            <li><a href='#'>Button 1</a></li>
                            <li><a href='#'>Button 2</a></li>
                            <li><a href='#'>Button 3</a></li>
                        </ul>
                    </div>
                    <div className={
                        classNames(
                            s.Container_endBox,
                            s.Container
                        )
                    }>
                        <div><a href='#'>+375 (00) 000 00 00</a></div>
                        <div className={s.Container_endBox_divider}>|</div>
                        <div className={s.SwitchButton}><a href='#'>but</a></div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HeaderDesktop;