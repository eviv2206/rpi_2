import React from 'react';
//import classNames from 'classnames';
import { Nav, Navbar } from 'react-bootstrap';
//import '../../../../../styles/font-sizes';
//import c from '../../../../../styles/_colors.scss';
//import HeaderMobileMenu from './HeaderMobileMenu';

import 'bootstrap/dist/css/bootstrap.min.css';
import s from './HeaderMobile.module.scss';

const HeaderMobile = () => {
    return(
        <>
            <Navbar collapseOnSelect expand="lg" variant='white' className={s.Container}>
                <Navbar.Brand href="#home">
                    <div className={s.Container_beginBox}><a href='#'>HEADER</a></div>
                </Navbar.Brand>
                <Navbar.Toggle className={s.Toggle} aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link className={s.List} href="#features">Button1</Nav.Link>
                        <Nav.Link className={s.List} href="#pricing">Button2</Nav.Link>
                        <Nav.Link className={s.List} href="#deets">Button3</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    );
};

export default HeaderMobile;