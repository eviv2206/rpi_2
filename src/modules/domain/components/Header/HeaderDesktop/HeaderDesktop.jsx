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
import russianFlag from '../../../../../assets/images/russianFlag.svg';
import usFlag from '../../../../../assets/images/usFlag.svg';


const {
    LABEL_LOGO,
} = HEADER_DICTIONARY;

const HeaderDesktop = (props) => {
    const [value, setValue] = useState('');

    const { t, i18n } = useTranslation();

    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
    };

    return (
        <>
            <div>
                <div className={s.Container}>
                    <div className={s.Container_beginBox}>
                        <Link to="/domain">{LABEL_LOGO}</Link>
                    </div>
                    <div className={s.Container_centerBox}>
                        <ul className={s.List}>
                            <li>
                                <Link to="/domain">{t('main_title')}</Link>
                            </li>
                            <li>
                                <Link to="/domain/authors">{t('all_authors_title')}</Link>
                            </li>
                        </ul>
                    </div>
                    <div className={
                        classNames(
                            s.Container_endBox,
                            s.Container
                        )
                    }>
                        <ul className={s.LanguageSelector}>
                            <li>
                                <img
                                    src={russianFlag}
                                    onClick={() => changeLanguage('ru')}
                                    alt="russian"
                                />
                            </li>
                            <li>
                                <img src={usFlag}
                                    onClick={() => changeLanguage('en')}
                                    alt="us"
                                />
                            </li>
                        </ul>
                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder={t('place_holder_input')}
                                className="me-2"
                                aria-label="Search"
                                onChange={e => setValue(e.target.value)}
                            />
                            <Button variant="outline-success">
                                <img
                                    src={search}
                                    alt="search"
                                    onClick={() => props.onSearchClick(value)}
                                />
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