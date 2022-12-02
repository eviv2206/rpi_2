import barschevskiy from '../../../../assets/authorsText/barschevskiy.json';
import bogushevich from '../../../../assets/authorsText/bogushevich.json';
import borodulin from '../../../../assets/authorsText/borodulin.json';
import brovka from '../../../../assets/authorsText/brovka.json';
import byadulya from '../../../../assets/authorsText/byadulya.json';
import dunin from '../../../../assets/authorsText/dunin.json';
import gilevich from '../../../../assets/authorsText/gilevich.json';
import picBarschevskiy from '../../../../assets/images/barschevskiy.png';
import picBogushevich from '../../../../assets/images/bogushevich.png';
import picBorodulin from '../../../../assets/images/borodulin.png';
import picBrovka from '../../../../assets/images/brovka.png';
import picByadulya from '../../../../assets/images/byadulya.png';
import picDunin from '../../../../assets/images/dunin.png';
import picGilevich from '../../../../assets/images/gilevich.png';


const useDayAuthor = () => {
    const authorsArr = [
        { author: barschevskiy, pic: picBarschevskiy },
        { author: bogushevich, pic: picBogushevich },
        { author: borodulin, pic: picBorodulin },
        { author: brovka, pic: picBrovka },
        { author: byadulya, pic: picByadulya },
        { author: dunin, pic: picDunin },
        { author: gilevich, pic: picGilevich }
    ];
    return authorsArr[Math.floor(Math.random() * authorsArr.length)];
};

export default useDayAuthor;