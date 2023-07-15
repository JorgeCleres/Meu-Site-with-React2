import Container from 'react-bootstrap/Container';
import './contato.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

function Contato() {

    return (
        <div className="contato">
            <Container>
                <h3>Contato</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sollicitudin metus metus, at viverra nisl vehicula non. Mauris ut libero nec est pretium scelerisque. Ut id tor</p>
                <div className='contato-dates'>
                    <div className='form'>
                        <Form>
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Email"
                                className="mb-3"
                            >
                                <Form.Control type="email" placeholder="name@example.com" />
                            </FloatingLabel>

                            <FloatingLabel
                                controlId="floatingInput"
                                label="Nome"
                                className="mb-3"
                            >
                                <Form.Control type="email" placeholder="name@example.com" />
                            </FloatingLabel>

                            <FloatingLabel controlId="floatingTextarea2" label="Comments">
                                <Form.Control
                                    as="textarea"
                                    placeholder="Leave a comment here"
                                    style={{ height: '100px' }}
                                />
                            </FloatingLabel>

                            <Button variant="primary" type="submit">
                                Enviar
                            </Button>
                        </Form>
                    </div>
                    {/* <div className=''>

                    </div> */}
                </div>
            </Container>
        </div>
    );
}

export default Contato;
