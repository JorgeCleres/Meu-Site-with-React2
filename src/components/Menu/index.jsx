import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import img from '../../images/logo.png';
import './menu.css'

function Menu() {
    return (
        <Navbar className="Menu" collapseOnSelect expand="lg">
            <Container>
                <Navbar.Brand href="#home">
                    <img src={img} alt="" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
                    <Nav className="justify-content-end">
                        <Nav.Link href="#">Inicio</Nav.Link>
                        <Nav.Link href="#sobre">Sobre</Nav.Link>
                        <Nav.Link href="#exp">Experiência</Nav.Link>
                        <Nav.Link href="#portifolio">Portifolio</Nav.Link>
                        <Nav.Link href="#contato">Contato</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Menu;