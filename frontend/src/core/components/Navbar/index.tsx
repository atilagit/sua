import React from 'react'
import { ReactComponent as Logo } from 'core/assets/images/logo.svg'
import './styles.scss'

const Navbar = () => {
    return (
        <nav className="row main-nav">
            <div className="col-3">
                <Logo />
            </div>
            <div className="col-6">
                <ul className="main-menu">
                    <li>
                        <a href="link" className="nav-link active">
                            Diárias
                        </a>
                    </li>
                    <li>
                        <a href="link" className="nav-link">
                            Entradas
                        </a>
                    </li>
                    <li>
                        <a href="link" className="nav-link">
                            Estoque
                        </a> 
                    </li>
                </ul>
            </div>
            <div className="col-3 text-end ">
                Olá Leandro!
            </div>
        </nav>
    )
}

export default Navbar