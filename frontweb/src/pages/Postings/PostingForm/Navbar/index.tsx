import { NavLink } from 'react-router-dom';
import './styles.css'; 

const Navbar = () => {
    return (
        <nav className='posting-nav-container'>
            <ul>
                <li>
                    <NavLink to="/postings/posting/create" className='posting-nav-item'>
                        <h1>Diárias</h1>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/postings/salary-advance/create" className='posting-nav-item'>
                        <h1>Adiantamentos</h1>
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;