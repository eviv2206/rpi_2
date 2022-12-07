import useAuthors from './useAuthors';
//import NOTHING_FOUND from './../../../../assets/authorsText/nothingfound.json';

const useSearch = (surname) => {
    const authorsArr = useAuthors();
    return authorsArr.find((elem) => elem.author.surname.toLowerCase() === surname.toLowerCase());
};

export default useSearch;