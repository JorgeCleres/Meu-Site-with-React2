import Container from 'react-bootstrap/Container';
import './capa.css'
import terra from '../../images/terra.png';
import Effect from '../effects/index';
import lua from '../../images/lua.png'

function Capa() {
    console.log('teste');
    return (
        <div className="Capa">
            <Container>
                <h1>Olá</h1>
                <h1>Eu sou o Jorge</h1>
                <h1>Dev <span className="Capa_edit-font">Front-End</span></h1>
                <p>Trabalhando com o que eu amo desde 2018</p>
                <a className='btn' href="https://wa.me/55041997535965">Entrar em contato</a>
            </Container>
            <img src={terra} alt="terra"/>
            {/* <Effect image={lua}/> */}
        </div>
    );
}

export default Capa;
