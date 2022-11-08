import {Link} from 'react-router-dom'
import Ofertar from './assets/ofertar.svg'
import React from 'react'
import './styles.css'
function Header () {
    return (
       
        <header>
            <div>
               <p> <span>Seja Bem-Vindo</span> à  Igreja Evangélica Assembleia de Deus Templo Central em Guaraciaba do Norte</p>
                <Link to='/Ofertar' style={{ textDecoration: 'none' }}><button className="button"><img style={{ width: 20}} src={Ofertar} alt="" />Ofertar</button></Link>
            </div>
        </header>
    )
}

export { Header }