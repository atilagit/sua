import React from 'react'
import { ReactComponent as Logo } from 'core/assets/images/logo.svg'

const Navbar = () => {
    return (
        <nav className="row bg-primary main-nav">
            <div className="col-3">
                <Logo />
            </div>
            <div className="col-6">
                <ul className="main-menu">
                    <li>
                        Diárias
                    </li>
                    <li>
                        Entradas
                    </li>
                    <li>
                        Estoque
                    </li>
                </ul>
            </div>
            <div className="col-3 text-end">
                Olá Leandro!
            </div>
        </nav>
    )
}

export default Navbar