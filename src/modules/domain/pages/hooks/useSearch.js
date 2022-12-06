import barschevskiy from '../../../../assets/authorsText/barschevskiy.json';
import picBarschevskiy from '../../../../assets/authorsImages/barschevskiy.png';
import bogushevich from '../../../../assets/authorsText/bogushevich.json';
import picBogushevich from '../../../../assets/authorsImages/bogushevich.png';
import borodulin from '../../../../assets/authorsText/borodulin.json';
import picBorodulin from '../../../../assets/authorsImages/borodulin.png';
import brovka from '../../../../assets/authorsText/brovka.json';
import picBrovka from '../../../../assets/authorsImages/brovka.png';
import byadulya from '../../../../assets/authorsText/byadulya.json';
import picByadulya from '../../../../assets/authorsImages/byadulya.png';
import dunin from '../../../../assets/authorsText/dunin.json';
import picDunin from '../../../../assets/authorsImages/dunin.png';
import gilevich from '../../../../assets/authorsText/gilevich.json';
import picGilevich from '../../../../assets/authorsImages/gilevich.png';

const useSearch = (surname) => {
    const authorsArr = [
        { author: barschevskiy, pic: picBarschevskiy },
        { author: bogushevich, pic: picBogushevich },
        { author: borodulin, pic: picBorodulin },
        { author: brovka, pic: picBrovka },
        { author: byadulya, pic: picByadulya },
        { author: dunin, pic: picDunin },
        { author: gilevich, pic: picGilevich }
    ];

    return authorsArr.find((elem) => elem.author.surname === surname);


};

export default useSearch;