import './styles.css'
import Logo from './assets/logo-PB.svg'
function Footer() {
    return (
        <footer>

            <div>
                <ul>
                    <li>
                        <ul>
                            <li><img src={Logo} alt={Logo} style={{width: 100}} /></li>
                            <li>&copy; 2022, Todos os Direitos reservados</li>
                        </ul>
                    </li>
                    <li>
                        <ul>
                            <li>Desenvolvedor</li>
                            <li>Jaaziel Jr.</li>
                            <li>jaaziel.dev@gmail.com</li>
                        </ul>
                    </li>
                    <li>
                        <ul>
                            <li>Mensagens</li>
                            <li>Contato</li>
                            <li>Adelphos</li>
                        </ul>
                    </li>
                </ul>
            </div>

            <div id="social">
                <ul>
                    <li id='one'></li>
                    <li></li>
                    <li></li>
                </ul>
                <ul>
                    <li><div><button></button></div></li>
                </ul>

            </div>
        </footer>
    )
}
export { Footer }