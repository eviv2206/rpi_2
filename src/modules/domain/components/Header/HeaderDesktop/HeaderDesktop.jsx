import React, { useState } from 'react';
import classNames from 'classnames';
import s from './HeaderDesktop.module.scss';
import HEADER_DICTIONARY from '../Header.dictionary';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import search from '../../../../../assets/images/search.svg';
import PropTypes from 'prop-types';

const {
    LABEL_LOGO,
    LABEL_MAIN,
    LABEL_LIST_AUTHORS,
    LABEL_INPUT_SURNAME,
} = HEADER_DICTIONARY;



const HeaderDesktop = (props) => {
    const [ value, setValue ] = useState('');


    return(
        <>
            <div>
                <div className={s.Container}>
                    <div className={s.Container_beginBox}><Link to='/domain'>{LABEL_LOGO}</Link></div>
                    <div className={s.Container_centerBox}>
                        <ul className={s.List}>
                            <li><Link to='/domain'>{LABEL_MAIN}</Link></li>
                            <li><Link to='' href='#'>{LABEL_LIST_AUTHORS}</Link></li>
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