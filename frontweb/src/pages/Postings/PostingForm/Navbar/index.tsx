import './styles.css'; 

const Navbar = () => {
    return (
        <nav className='posting-nav-container'>
            <ul>
                <li>
                    <a href="link" className='posting-nav-item active'>
                        <h1>Cadastro de Diárias</h1>
                    </a>
                </li>
                <li>
                    <a href="link" className='posting-nav-item'>
                        <h1>Cadastro de Adiantamentos</h1>
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;