import './carrousel.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import plusom from './../../images/projetos/plusom.jpg'
import sanepar from './../../images/projetos/sanepar.jpg'
import Rcleres from './../../images/projetos/Rcleres.jpg'
import skill from './../../images/projetos/skill.jpg'
import tecdix from './../../images/projetos/tecdix.jpg'
import vadela from './../../images/projetos/vadela.jpg'
import zamiregabi from './../../images/projetos/zamiregabi.jpg'
import advocacia from './../../images/projetos/advocacia.jpg'
import agendax from './../../images/projetos/agendax.jpg'

function Portifolio() {
    var settings = {
        dots: false,
        infinite: true,
        speed: 800,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 800,
                autoplay: false,
              }
            }
          ]
    };

    return (
        <div className="carrousel">
            <Slider {...settings}>
               <div><img src={plusom} alt="" /></div>
               <div><img src={Rcleres} alt="" /></div>
               <div><img src={sanepar} alt="" /></div>
               <div><img src={skill} alt="" /></div>
               <div><img src={tecdix} alt="" /></div>
               <div><img src={vadela} alt="" /></div>
               <div><img src={zamiregabi} alt="" /></div>
               <div><img src={advocacia} alt="" /></div>
               <div><img src={agendax} alt="" /></div>
            </Slider>
        </div>
    );
}

export default Portifolio;
