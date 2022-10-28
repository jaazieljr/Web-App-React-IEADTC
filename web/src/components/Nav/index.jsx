import { Link } from 'react-router-dom'
import React from "react"
import './styles.css'
import Logo from './assets/logo.svg'
import Lupa from './assets/lupa.svg'
import Menu from './assets/menu.svg'
function Nav() {
    return (
        <nav>
            <Link to='/' style={{ textDecoration: 'none' }}><img className="logo" src={Logo} alt="" /></Link>
            
            
                <ul className="nav-list">
                    <li>
                        <Link to='/Mensagens' style={{ textDecoration: 'none' }}> <span>Mensagens</span> </Link>
                    </li>
                    <li>
                        <Link to='/Contato' style={{ textDecoration: 'none' }}> <span>Contato</span> </Link>
                    </li>
                    <li>
                        <Link to='/Login' style={{ textDecoration: 'none' }}><span>Adephos</span></Link>
                    </li>
                    <li>
                        <Link to='/Login' style={{ textDecoration: 'none' }}><span><img className="lupa" src={Lupa} alt="" /></span></Link>
                    </li>
                </ul>
            <div>
                <button><img className="logo" src={Menu} alt="" /></button>
            </div>

        </nav>
    );
}
export { Nav }  