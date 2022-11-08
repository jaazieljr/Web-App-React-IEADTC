import './styles.css'
import Logo from './assets/logo-PB.svg'
import Facebook from './assets/icon-facebook.svg'
import Instagram from './assets/icon-instagram.svg'
import YouTube from './assets/icon-youtube.svg'
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
                    <li><img src={Facebook} style = {{width: 40}} alt="Facebook" srcset="" /></li>
                    <li><img src={Instagram} style = {{width: 40}} alt="Instagram" srcset="" /></li>
                    <li><img src={YouTube} style = {{width: 40}} alt="YouTube" srcset="" /></li>
                </ul>
                <ul>
                    <li><button></button></li>
                </ul>

            </div>
        </footer>
    )
}
export { Footer }