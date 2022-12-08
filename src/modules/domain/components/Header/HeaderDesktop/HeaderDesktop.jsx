import React, { useState } from 'react';
import classNames from 'classnames';
import s from './HeaderDesktop.module.scss';
import HEADER_DICTIONARY from '../Header.dictionary';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import search from '../../../../../assets/images/search.svg';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';


const {
    LABEL_LOGO,
    // eslint-disable-next-line
    LABEL_MAIN,
    // eslint-disable-next-line
    LABEL_LIST_AUTHORS,
    LABEL_INPUT_SURNAME,
} = HEADER_DICTIONARY;



const HeaderDesktop = (props) => {
    const [ value, setValue ] = useState('');
    const { t } = useTranslation();

    return(
        <>
            <div>
                <div className={s.Container}>
                    <div className={s.Container_beginBox}><Link to='/domain'>{LABEL_LOGO}</Link></div>
                    <div className={s.Container_centerBox}>
                        <ul className={s.List}>
                            <li><Link to='/domain'>{ t('main_page') }</Link></li>
                            <li><Link to='/domain/authors'>{ t('author_list') }</Link></li>
                        </ul>
                    </div>
                    <div className={
                        classNames(
                            s.Container_endBox,
                            s.Container
                        )
                    }>
                        <ul className={s.LanguageSelector}>
                            <li><Button onClick={() => i18next.changeLanguage('ru') }>Русский</Button></li>
                            <li><Button onClick={() => i18next.changeLanguage('en') }>English</Button></li>
                        </ul>
                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder={LABEL_INPUT_SURNAME}
                                className="me-2"
                                aria-label="Search"
                                onChange={e => setValue(e.target.value)}
                            />
                            <Button variant="outline-success">
                                <img src={search} alt='search' onClick={() => props.onSearchClick(value)}/>
                            </Button>
                        </Form>
                    </div>
                </div>
            </div>
        </>
    );
};

HeaderDesktop.propTypes = {
    onSearchClick: PropTypes.func.isRequired,
};

export default HeaderDesktop;