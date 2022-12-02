import React from 'react';
import s from './DayAuthorDesktop.module.scss';
import DAY_AUTHOR_DICTIONARY from '../DayAuthor.dictionary';
import PropTypes from 'prop-types';

const {
    LABEL_TEXT,
} = DAY_AUTHOR_DICTIONARY;

const DayAuthorDesktop = (props) => {
    return (
        <>
            <div className={s.Container} onClick={props.onClick}>
                <form className={s.Form}>
                    <div className={s.Form_label}>
                        <h2>{LABEL_TEXT}</h2>
                    </div>
                    <div className={s.Form_author_description}>
                        <div className={s.Form_author_description_main_info}>
                            <div>
                                <p>{props.man.author.firstName} {props.man.author.surname}</p>
                            </div>
                            <div>
                                <p>{props.man.author.birthDate} - {props.man.author.deadDate}</p>
                            </div>
                        </div>
                        <img src={props.man.pic} alt={props.man.author.surname}/>
                    </div>
                </form>
            </div>
        </>
    );
};

DayAuthorDesktop.propTypes = {
    man: PropTypes.object.isRequired,
    onClick: PropTypes.func.isRequired,
};

export default DayAuthorDesktop;
