import './portifolio.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CarrouselOne from './carrouselOne'
import CarrouselTwo from './carrouselTwo'

function Portifolio() {
    return (
        <div className="portifolio">
            <h3>Portifolio</h3>
            <CarrouselOne />
            <CarrouselTwo />
        </div>
    );
}

export default Portifolio;
