import React from 'react';
import useSignInMediaQuery from '../../../hooks/useSignInMediaQuery';
import DayAuthorDesktop from './DayAuthorDesktop';
import DayAuthorMobile from './DayAuthorMobile';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const DayAuthor = (props) => {
    const { isDesktopWidth, isMobileWidth, isMobileHeight } = useSignInMediaQuery();

    const navigate = useNavigate();

    const onClick = () => {
        navigate({
            pathname: '/domain/author/',
            search: `?surname=${props.man.author.surnameEn}`
        }, {
            state: props.man,
            replace: true,
        });
    };

    return (
        <>
            {isDesktopWidth && !isMobileHeight && <DayAuthorDesktop man={props.man} onClick={onClick}/>}
            {isMobileWidth && <DayAuthorMobile man={props.man} onClick={onClick}/>}
        </>
    );
};

DayAuthor.propTypes = {
    man: PropTypes.object.isRequired,
};

export default DayAuthor;