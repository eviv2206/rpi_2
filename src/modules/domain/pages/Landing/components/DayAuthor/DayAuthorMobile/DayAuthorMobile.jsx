import PropTypes from 'prop-types';
import s from './DayAuthorMobile.module.scss';
import React from 'react';
import DAY_AUTHOR_DICTIONARY from '../DayAuthor.dictionary';

const {
    LABEL_TEXT,
} = DAY_AUTHOR_DICTIONARY;

const DayAuthorMobile = (props) => {
    return (
        <>
            <div className={s.Container}>
                <form className={s.Form} onClick={props.onClick}>
                    <div className={s.Form_label}>
                        <h2>{LABEL_TEXT}</h2>
                    </div>
                    <div className={s.Form_main_info}>
                        <div>
                            <p>{props.man.author.firstName} {props.man.author.surname}</p>
                        </div>
                        <div>
                            <p>{props.man.author.birthDate} - {props.man.author.deadDate}</p>
                        </div>
                    </div>
                    <img src={props.man.pic} alt={props.man.author.surname}/>
                </form>
            </div>
        </>
    );
};

DayAuthorMobile.propTypes = {
    man: PropTypes.object.isRequired,
    onClick: PropTypes.func.isRequired,
};

export default DayAuthorMobile;