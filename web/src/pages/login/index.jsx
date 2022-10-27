
import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom'
import logoAdelphos from './assets/logo-adel.svg'
import './styles.css'
function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


    return (<>

      <div className="container">
        <div className="container-login">
          <div className="wrap-login">
            <form className="login-form">
            
              <span className="login-form-title">Seja Bem-vindo!</span>
              <Link to='/'><span className="login-form-title"><img src={logoAdelphos} alt="Adelphos"/></span></Link>
              
              <div className="wrap-input">
                <input
                  className={email !== "" ? 'has-val input' : 'input'}
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
                <span className="focus-input" data-placeholder="Email"></span>
              </div>
              <div className="wrap-input">
                <input
                  className={password !== "" ? 'input has-val' : 'input'}
                  type="password"
                  value={password}
                  onChange={e => setPassword(e.target.value)} />
                <span className="focus-input" data-placeholder="Senha"></span>
              </div>
              <div className="container-login-form-btn">
                <button type="" className="login-form-btn">Login</button>
                <div className='text-center'>
                  <span className="txt1">Esqueceu a senha? </span>
                  <a href="#top" className="txt2"> Entre em contato</a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

    </>)
}


export { Login }