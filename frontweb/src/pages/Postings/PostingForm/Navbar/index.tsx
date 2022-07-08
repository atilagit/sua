import { NavLink } from 'react-router-dom';
import './styles.css'; 

const Navbar = () => {
    return (
        <nav className='posting-nav-container'>
            <ul>
                <li>
                    <NavLink to="/postings/create/posting" className='posting-nav-item'>
                        <h1>Cadastro de Diárias</h1>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/postings/create/salary-advance" className='posting-nav-item'>
                        <h1>Cadastro de Adiantamentos</h1>
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;