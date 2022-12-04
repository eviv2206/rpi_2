import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';



const HeaderMobileMenu = () => {
    return (
        <>
            <Menu>
                <Form className="d-flex">
                    <Form.Control
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                    />
                    <Button variant="outline-success">Search</Button>
                </Form>
            </Menu>
        </>
    );
};

export default HeaderMobileMenu;
