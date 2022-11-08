import { Link } from 'react-router-dom'
import React from "react"
import './styles.css'

import Logo from './assets/logo.svg'

function Nav() {
    return (
        <nav>
            <div>
                <Link to='/' style={{ textDecoration: 'none' }}><img className='logo' src={Logo} alt=""/></Link>
                <ul>
                    <li>
                        <Link to='/Mensagens' style={{ textDecoration: 'none' }}><p>Mensagens</p></Link>
                    </li>
                    <li>
                        <Link to='/Contato' style={{ textDecoration: 'none' }}><p>Contato</p> </Link>
                    </li>
                    <li>
                        <Link to='/Login' style={{ textDecoration: 'none' }}><p>Adelphos</p></Link>
                    </li>
                    <li>
                        <input type="search" name='search'/>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
export { Nav }  