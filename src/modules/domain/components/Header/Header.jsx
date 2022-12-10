import React from 'react';
import { useDeviceTypeContext } from '../../../../common/contexts/DeviceType';
import HeaderDesktop from './HeaderDesktop';
import HeaderMobile from './HeaderMobile';
import useSearch from '../../pages/hooks/useSearch';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();
    const { isDesktop, isMobile } = useDeviceTypeContext();

    const onSearchClick = (surname) => {
        const destAuthor = useSearch(surname);
        if (typeof (destAuthor) !== 'undefined') {
            navigate({
                pathname: '/domain/author/',
                search: `?surname=${destAuthor.author.surnameEn}`
            }, {
                state: destAuthor,
            });
        } else {
            navigate({
                pathname: '/domain/nothing-found/'
            }, {
                state: destAuthor,
            });
        }
    };

    return (
        <>
            {isDesktop && <HeaderDesktop onSearchClick={onSearchClick}/>}
            {isMobile && <HeaderMobile onSearchClick={onSearchClick}/>}
        </>
    );
};

export default Header;