import Container from 'react-bootstrap/Container';
import './sobre.css'

function Sobre() {

    return (
        <div className="sobre">
            <Container>
                <h3>Sobre</h3>
                <div className='sobre-box'>
                    <h4>Senta que lá vem história...</h4>
                    <p>Oi, sou Jorge. Tenho 29 anos, natural de Pinhais, cristão e fã de vídeo game. Desde sempre gostei de tecnologia, em 2018 decidi <span id="rose">mudar de vida</span> e investir no meu futuro e não tinha área melhor e mais a minha cara para ingressar do que TI. Comecei faculdade e com 6 meses consegui um estágio em uma empresa de testes de software, em 1 ano fui efetivado e minha primeira base na área foi lá. Lembra que eu decidi mudar de vida? Na área particular as coisas também começaram a mudar, nessa mesma empresa conheci a mulher que futuramente se tornaria minha esposa. Passado um tempo, me interessei pelo <span id="blue">desenvolvimento Front-End</span> e fui buscar oportunidades, a partir daí todas as minhas experiências foram nessa área. Aprendi, desenvolvi e me desenvolvi. Hoje trabalho em uma grande empresa como desenvolvedor e possuo sociedade em uma agência de marketing digital. A caminhada continua…!</p>
                </div>
            </Container>
        </div>
    );
}

export default Sobre;
