import borodulin from '../../../../assets/authorsText/borodulin.json';
import byadulya from '../../../../assets/authorsText/byadulya.json';
import bogdanovich from '../../../../assets/authorsText/bogdanovich.json';
import kolas from '../../../../assets/authorsText/kolas.json';
import kupala from '../../../../assets/authorsText/kupala.json';
import picKupala from '../../../../assets/authorsImages/kupala.png';
import picKolas from '../../../../assets/authorsImages/kolas.png';
import picBogdanovich from '../../../../assets/authorsImages/bogdanovich.png';
import picBorodulin from '../../../../assets/authorsImages/borodulin.png';
import picByadulya from '../../../../assets/authorsImages/byadulya.png';
import NOTHING_FOUND from '../../../../assets/authorsText/nothingfound.json';

const useAuthors = () => {
    return [
        { author: bogdanovich, pic: picBogdanovich },
        { author: borodulin, pic: picBorodulin },
        { author: byadulya, pic: picByadulya },
        { author: kolas, pic: picKolas },
        { author: kupala, pic: picKupala },
        { author: NOTHING_FOUND, pic: undefined }
    ];
};

export default useAuthors;