import useAuthors from './useAuthors';
import NOTHING_FOUND from './../../../../assets/authorsText/nothingfound.json';

const useSearch = (surname) => {
    const authorsArr = useAuthors();
    let findRes = authorsArr.find((elem) => elem.author.surname.toLowerCase() === surname.toLowerCase());
    if (findRes == undefined){
        return NOTHING_FOUND;
    }else
        return findRes;
};

export default useSearch;