import Menu from '../.././components/Menu/index'
import Capa from '../.././components/Capa/index'
import Sobre from '../.././components/Sobre/index'
import Experiencia from '../.././components/Experiencia/index'
import Portifolio from '../.././components/Portifolio/index'
import Contato from '../.././components/Contato/index'
import './home.css'


function Home() {
  return (
    <div className="Home">
        <Menu />
        <Capa />
        <Sobre />
        <Experiencia />
        <Portifolio />
        <Contato />
    </div>
  );
}

export default Home;
