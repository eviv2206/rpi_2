import React, { useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import s from './HeaderMobile.module.scss';
import HEADER_DICTIONARY from '../Header.dictionary';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import search from '../../../../../assets/images/search.svg';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';


const {
    LABEL_LOGO,
    LABEL_MAIN,
    LABEL_LIST_AUTHORS,
    LABEL_INPUT_SURNAME,
} = HEADER_DICTIONARY;

const HeaderMobile = (props) => {
    const [ value, setValue ] = useState('');
    return(
        <>
            <Navbar collapseOnSelect expand="xl" variant='white' className={s.Container}>
                <Navbar.Brand href="#home">
                    <div className={s.Container_beginBox}><Link to='/domain'>{LABEL_LOGO}</Link></div>
                </Navbar.Brand>
                <Navbar.Toggle className={s.Toggle} aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link className={s.List}><Link to='/domain'>{LABEL_MAIN}</Link></Nav.Link>
                        <Nav.Link className={s.List}><Link to=''>{LABEL_LIST_AUTHORS}</Link></Nav.Link>
                        <Nav.Link className={s.List}>
                            <Form className="d-flex">
                                <Form.Control
                                    type="search"
                                    placeholder={LABEL_INPUT_SURNAME}
                                    className="me-2"
                                    aria-label="Search"
                                    onChange={e => setValue(e.target.value)}
                                />
                                <Button variant="outline-success" onClick={() => props.onSearchClick(value)}>
                                    <img src={search} alt='search'/>
                                </Button>
                            </Form>
                        </Nav.Link>
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