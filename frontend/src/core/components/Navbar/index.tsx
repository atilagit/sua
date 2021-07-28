import React from 'react'
import { NavLink } from 'react-router-dom'

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
                        <NavLink to="/daily" className="nav-link">Diárias</NavLink>
                    </li>
                    <li>
                        <NavLink to="/entries" className="nav-link">Entradas</NavLink>
                    </li>
                    <li>
                        <NavLink to="/inventory" className="nav-link">Estoque</NavLink>
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