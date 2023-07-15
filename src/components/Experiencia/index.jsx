import Container from 'react-bootstrap/Container';
import './exp.css'
import reactimg from '../../images/react.png'
import jsimg from '../../images/js.png'
import tsimg from '../../images/ts.png'
import htmlimg from '../../images/html.png'
import cssimg from '../../images/css.png'
import nodeimg from '../../images/node.png'
import vueimg from '../../images/vue.png'
import wordpressimg from '../../images/wordpress.png'
import phpimg from '../../images/php.png'
import sassimg from '../../images/sass.png'
import mysqlimg from '../../images/mysql.png'
import mongoimg from '../../images/mongo.png'
import figmaimg from '../../images/figma.png'

function Experiencia() {

    return (
        <div className="exp">
            <Container>
                <h3>Experiência</h3>
                <div className='exp-dates'>
                    <div className='text'>
                        <h6>Desenvolvedor front-end/web designer</h6>
                        <p>Minha jornada em TI começou cursando Análise e Desenvolvimento de Sistemas na FAPI, onde consegui toda a base pra construir minha carreira. Meu primeiro trabalho com TI foi na Prime Control atuando com testes de software, consegui bastante experiência lá e ampliei meus conhecimentos. Porém, desde a faculdade, me identifiquei com Front, então decidi sair da área de testes e conquistar meu espaço no desenvolvimento Front-end. No momento, além de vários projetos, estou aperfeiçoando meu conhecimento em JS, React.js e Nods.js. Seja bem vindo ao meu site, aqui você vai conhecer um pouco do meu trabalho.</p>
                    </div>
                    <div className='dates'>
                        <h6>My Skills</h6>
                        <div className='skills'>
                            <div>
                                <img src={reactimg}  alt="react"/>
                                <p>React</p>
                            </div>

                            <div>
                                <img src={jsimg}  alt="js"/>
                                <p>JavaScript</p>
                            </div>

                            <div>
                                <img src={tsimg}  alt="ts"/>
                                <p>TypsScript</p>
                            </div>

                            <div>
                                <img src={htmlimg}  alt="html"/>
                                <p>HTML</p>
                            </div>

                            <div>
                                <img src={cssimg}  alt="css"/>
                                <p>CSS</p>
                            </div>

                            <div>
                                <img src={nodeimg}  alt="node"/>
                                <p>Node</p>
                            </div>

                            <div>
                                <img src={vueimg}  alt="vue"/>
                                <p>Vue.js</p>
                            </div>

                            <div>
                                <img src={wordpressimg}  alt="wordpress"/>
                                <p>Wordpress</p>
                            </div>
                        
                            <div>
                                <img src={phpimg}  alt="php"/>
                                <p>PHP</p>
                            </div>

                            <div>
                                <img src={sassimg}  alt="sass"/>
                                <p>SASS</p>
                            </div>
                                        
                            <div>
                                <img src={mysqlimg}  alt="mysql"/>
                                <p>MySQL</p>
                            </div>

                            <div>
                                <img src={mongoimg}  alt="mongodb"/>
                                <p>MongoDB</p>
                            </div>

                            <div>
                                <img src={figmaimg}  alt="mongodb"/>
                                <p>Figma</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default Experiencia;
