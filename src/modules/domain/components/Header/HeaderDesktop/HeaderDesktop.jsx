import React from 'react';
import classNames from 'classnames';
import s from './HeaderDesktop.module.scss';
import HEADER_DICTIONARY from '../Header.dictionary';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import search from '../../../../../assets/images/search.svg';

const {
    LABEL_LOGO,
    LABEL_MAIN,
    LABEL_LIST_AUTHORS,
    LABEL_INPUT_SURNAME,
} = HEADER_DICTIONARY;

const HeaderDesktop = () => {
    return(
        <>
            <div>
                <div className={s.Container}>
                    <div className={s.Container_beginBox}><Link to='/domain'>{LABEL_LOGO}</Link></div>
                    <div className={s.Container_centerBox}>
                        <ul className={s.List}>
                            <li><Link to='/domain'>{LABEL_MAIN}</Link></li>
                            <li><a href='#'>{LABEL_LIST_AUTHORS}</a></li>
                        </ul>
                    </div>
                    <div className={
                        classNames(
                            s.Container_endBox,
                            s.Container
                        )
                    }>
                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder={LABEL_INPUT_SURNAME}
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success">
                                <img src={search} alt='search'/>
                            </Button>
                        </Form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HeaderDesktop;