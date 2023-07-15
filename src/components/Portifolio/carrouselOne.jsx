import './carrousel.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import artistic from './../../images/projetos/Artistic.jpg'
import bcprime from './../../images/projetos/bcprime.jpg'
import amosca from './../../images/projetos/amosca.jpg'
import casamento from './../../images/projetos/casamento.jpg'
import empiric from './../../images/projetos/empiric.jpg'
import Endlich from './../../images/projetos/Endlich.jpg'
import inoxSolution from './../../images/projetos/inoxSolution.jpg'
import ivanternos from './../../images/projetos/ivanternos.jpg'
import odontopinho from './../../images/projetos/odontopinho.jpg'
import Pansystem from './../../images/projetos/Pansystem.jpg'

function Portifolio(images) {
  var settings = {
    dots: false,
    infinite: true,
    speed: 400,
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
        <div><img src={amosca} alt="" /></div>
        <div><img src={artistic} alt="" /></div>
        <div><img src={bcprime} alt="" /></div>
        <div><img src={casamento} alt="" /></div>
        <div><img src={empiric} alt="" /></div>
        <div><img src={Endlich} alt="" /></div>
        <div><img src={inoxSolution} alt="" /></div>
        <div><img src={ivanternos} alt="" /></div>
        <div><img src={odontopinho} alt="" /></div>
        <div><img src={Pansystem} alt="" /></div>
      </Slider>
    </div>
  );
}

export default Portifolio;
