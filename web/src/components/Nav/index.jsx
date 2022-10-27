import { Link } from 'react-router-dom'
import React from "react"
import './styles.css'
import Logo from './assets/logo.svg'
function Nav() {
    return (
        <nav>
            <img className="logo" src={Logo} alt="" />
            <ul className="nav-list">
                <li>
                <Link to='/Mensagens' style={{textDecoration: 'none'}}> <span>Mensagens</span> </Link>
                </li>
                <li>
                <Link to='/Contato' style={{textDecoration: 'none'}}> <span>Contato</span> </Link>
                </li>
                <li>
                <Link to='/Login' style={{textDecoration: 'none'}}><span>Obreiros</span></Link>
                </li>
            </ul>
        </nav>
    );
}
export { Nav }  