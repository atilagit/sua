import './styles.css';

const PfCard = () => {
    return (
        <div className="base-card pj-card">
            <div className="pf-card-line1">
                <div className="name-pf">
                    <h2>Jonielson Vieira</h2>
                </div>
                <div className="admissao-pf">
                    <p>Admissão: 17/03/2022</p>
                </div>
                <div className="cpf-pf">
                    <p>CPF: 390.199.288-11</p>
                </div>
                <div className="status-pf">
                    <h2>INATIVO</h2>
                </div>
            </div>
            <div className="pf-card-line2">
                <div className="nivel-usuario-pf">
                    <p>Usuário Administrador</p>
                </div>
                <div className="endereco-pf">
                    <p>Rua Alessandro Bonci, 78, Elsorado, Mogi Mirim, SP, 13800-456</p>
                </div>
            </div>
        </div>
    );
}

export default PfCard;