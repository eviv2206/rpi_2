import React, { useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import HEADER_DICTIONARY from '../Header.dictionary';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import search from '../../../../../assets/images/search.svg';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import s from './HeaderMobile.module.scss';
import { useTranslation } from 'react-i18next';
import russianFlag from '../../../../../assets/images/russianFlag.svg';
import usFlag from '../../../../../assets/images/usFlag.svg';


const {
    LABEL_LOGO,
} = HEADER_DICTIONARY;

const HeaderMobile = (props) => {
    const [value, setValue] = useState('');

    const { t, i18n } = useTranslation();

    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
    };

    return (
        <>
            <Navbar collapseOnSelect expand="xl" variant="white" className={s.Container}>
                <Navbar.Brand href="#home">
                    <div className={s.Container_beginBox}><Link to="/domain">{LABEL_LOGO}</Link></div>
                </Navbar.Brand>
                <div className={s.Container_midBox}>
                    <Navbar.Toggle className={s.Toggle} aria-controls="responsive-navbar-nav"/>
                </div>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link className={s.List}><Link to="/domain">{t('main_title')}</Link></Nav.Link>
                        <Nav.Link className={s.List}><Link
                            to="/domain/authors">{t('all_authors_title')}</Link></Nav.Link>
                        <Nav.Link className={s.List}>
                            <Form className="d-flex">
                                <Form.Control
                                    type="search"
                                    placeholder={t('place_holder_input')}
                                    className="me-2"
                                    aria-label="Search"
                                    onChange={e => setValue(e.target.value)}
                                />
                                <div className={s.SearchButton}>
                                    <Button variant="outline-success" onClick={() => props.onSearchClick(value)}>
                                        <img src={search} alt="search"/>
                                    </Button>
                                </div>
                            </Form>
                        </Nav.Link>
                        <div className={s.LanguageSelector}>
                            <Nav.Item><img onClick={() => changeLanguage('ru')} src={russianFlag}
                                alt="russian"/></Nav.Item>
                            <Nav.Item><img onClick={() => changeLanguage('en')}
                                src={usFlag} alt="english"/></Nav.Item>
                        </div>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    );
};

HeaderMobile.propTypes = {
    onSearchClick: PropTypes.func.isRequired,
};

export default HeaderMobile;