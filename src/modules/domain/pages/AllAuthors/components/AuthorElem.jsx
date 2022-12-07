import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import s from './AuthorElem.module.scss';

const AuthorElem = (props) => {
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
        <form onClick={onClick} className={s.AuthorForm}>
            <div><h2>{props.man.author.firstName} {props.man.author.surname}</h2></div>
            <div><p>{props.man.author.birthDate} - {props.man.author.deadDate}</p></div>
        </form>
    );
};

AuthorElem.propTypes = {
    man: PropTypes.object.isRequired,
};

export default AuthorElem;