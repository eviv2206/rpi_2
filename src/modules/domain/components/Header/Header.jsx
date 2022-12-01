import React from 'react';
import { useDeviceTypeContext } from '../../../../common/contexts/DeviceType';
import HeaderDesktop from './HeaderDesktop';
import HeaderMobile from './HeaderMobile';

const Header = () => {

    const { isDesktop, isMobile } = useDeviceTypeContext();

    return (
        <>
            {isDesktop && <HeaderDesktop/>}
            {isMobile && <HeaderMobile/>}
        </>
    );
};

export default Header;