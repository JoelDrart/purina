import React from 'react'
import './styles/PaginaInicio.css'
import Switch from './switch'
import logo from '../images/logoSS.png'

function PaginaInicio () {
  return (
        <>
            <section className="forms-section">
                <h1 className="section-title">Purina Ecuador</h1>
                <img src={logo} alt="Logotipo Purina" />
                <div className="forms">
                    <div className="form-wrapper is-active">
                        <button type="button" className="switcher switcher-login">
                            Iniciar
                            <span className="underline"></span>
                        </button>
                        <form className="form form-login">
                            <fieldset>
                                <legend>Por favor, ingrese su email y contraseña</legend>
                                <div className="input-block">
                                    <label htmlFor="login-email">Email</label>
                                    <input id="login-email" type="email" required />
                                    <hr></hr>
                                </div>
                                <div className="input-block">
                                    <label htmlFor="login-password">Contraseña</label>
                                    <input id="login-password" type="password" required />
                                    <hr></hr>
                                </div>
                            </fieldset>
                            <button type="submit" className="btn-login">Iniciar de Sesión</button>
                        </form>
                    </div>
                    <div className="form-wrapper">
                        <button type="button" className="switcher switcher-signup">
                            Registrarse
                            <span className="underline"></span>
                        </button>
                        <form className="form form-signup">
                            <fieldset>
                                <legend>Por favor, ingrese su email, contraseña y confirmación and password confirmation</legend>
                                <div className="input-block">
                                    <label htmlFor="signup-email">Email</label>
                                    <input id="signup-email" type="email" required />
                                </div>
                                <div className="input-block">
                                    <label htmlFor="signup-password">Contraseña</label>
                                    <input id="signup-password" type="password" required />
                                </div>
                            </fieldset>
                            <button type="submit" className="btn-signup">Registrar</button>
                        </form>
                    </div>
                </div>
            </section>
            <Switch />

        </>
  )
}

export default PaginaInicio
