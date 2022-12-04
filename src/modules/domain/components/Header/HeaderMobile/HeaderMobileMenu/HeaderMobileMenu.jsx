import React from 'react';
import s from './HeaderMobileMenu.module.scss';
import { slide as Menu } from 'react-burger-menu';

export default HeaderMobileMenu = () => {
    return(
        <>
            <Menu>
                <a className='menu-item' href="/">
                    Home
                </a>
                <a className='menu-item' href="/salads">
                    Salads
                </a>
                <a className='menu-item' href="/pizzas">
                    Pizzas
                </a>
                <a className='menu-item' href="/desserts">
                    Desserts
                </a>
            </Menu>
        </>
    )
}