import borodulin from '../../../../assets/authorsText/borodulin.json';
import byadulya from '../../../../assets/authorsText/byadulya.json';
import bogdanovich from '../../../../assets/authorsText/bogdanovich.json';
import kolas from '../../../../assets/authorsText/kolas.json';
import kupala from '../../../../assets/authorsText/kupala.json';
import picKupala from '../../../../assets/authorsImages/kupala/kupala.png';
import picKolas from '../../../../assets/authorsImages/kolas/kolas.png';
import picBogdanovich from '../../../../assets/authorsImages/bogdanovich/bogdanovich.png';
import picBorodulin from '../../../../assets/authorsImages/borodulin/borodulin.png';
import picByadulya from '../../../../assets/authorsImages/byadulya/byadulya.png';
import pyarschenok from '../../../../assets/authorsImages/bogdanovich/gallery/pyarschenok.png';
import venok from '../../../../assets/authorsImages/bogdanovich/gallery/venok.png';
import zorka from '../../../../assets/authorsImages/bogdanovich/gallery/zorka.png';
import koshki from '../../../../assets/authorsImages/borodulin/gallery/koshki.png';
import maladzik from '../../../../assets/authorsImages/borodulin/gallery/maladzik.png';
import tastament from '../../../../assets/authorsImages/borodulin/gallery/tastament.png';
import salavey from '../../../../assets/authorsImages/byadulya/gallery/salavey.png';
import spatkanne from '../../../../assets/authorsImages/byadulya/gallery/spatkanne.png';
import utochka from '../../../../assets/authorsImages/byadulya/gallery/utochka.png';
import rostani from '../../../../assets/authorsImages/kolas/gallery/rostani.png';
import tryasina from '../../../../assets/authorsImages/kolas/gallery/tryasina.png';
import zemlya from '../../../../assets/authorsImages/kolas/gallery/zemlya.png';
import paulinka from '../../../../assets/authorsImages/kupala/gallery/paulinka.png';
import tuteishia from '../../../../assets/authorsImages/kupala/gallery/tuteishia.png';
import vershi from '../../../../assets/authorsImages/kupala/gallery/vershi.png';


const useAuthors = () => {
    return [
        {
            author: bogdanovich,
            pic: picBogdanovich,
            gallery: [pyarschenok, venok, zorka]
        },
        {
            author: borodulin,
            pic: picBorodulin,
            gallery: [koshki, maladzik, tastament]
        },
        {
            author: byadulya,
            pic: picByadulya,
            gallery: [salavey, spatkanne, utochka]
        },
        {
            author: kolas,
            pic: picKolas,
            gallery: [rostani, tryasina, zemlya]
        },
        {
            author: kupala,
            pic: picKupala,
            gallery: [paulinka, tuteishia, vershi]
        },
    ];
};

export default useAuthors;