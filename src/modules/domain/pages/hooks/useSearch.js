import useAuthors from './useAuthors';

const useSearch = (surname) => {
    const authorsArr = useAuthors();
    return authorsArr.find((elem) => elem.author.surname === surname);
};

export default useSearch;