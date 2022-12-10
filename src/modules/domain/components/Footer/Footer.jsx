import React from 'react';
import './Footer.module.scss';
import s from './Footer.module.scss';
import evivIcon from '../../../../assets/images/evivIcon.png';
import l9sikIcon from '../../../../assets/images/l9sikIcon.png';
import stepanLushIcon from '../../../../assets/images/stepanLushIcon.png';
import FOOTER_DICTIONARY from './Footer.dictionary';

const {
    LABEL_MAIN,
    LABEL_EVIV,
    LINK_EVIV,
    LABEL_L9SIK,
    LINK_L9SIK,
    LABEL_STEPAN_LUSH,
    LINK_STEPAN_LUSH,
} = FOOTER_DICTIONARY;

const Footer = () => {
    return (
        <>
            <div className={s.Container}>
                <div className={s.Made_by}>
                    <h3>{LABEL_MAIN}</h3>
                </div>
                <div className={s.Boxes}>
                    <div className={s.Boxes_box_collaborator}>
                        <img src={evivIcon} alt="evivIcon"/>
                        <a href={LINK_EVIV}>{LABEL_EVIV}</a>
                    </div>
                    <div className={s.Boxes_box_collaborator}>
                        <img src={l9sikIcon} alt="l9sikIcon"/>
                        <a href={LINK_L9SIK}>{LABEL_L9SIK}</a>
                    </div>
                    <div className={s.Boxes_box_collaborator}>
                        <img src={stepanLushIcon} alt="StepanLushIcon"/>
                        <a href={LINK_STEPAN_LUSH}>{LABEL_STEPAN_LUSH}</a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;