import useAuthors from './useAuthors';


const useDayAuthor = () => {
    const authorsArr = useAuthors();
    return authorsArr[Math.floor(Math.random() * authorsArr.length)];
};

export default useDayAuthor;