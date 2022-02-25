import './styles.css';

const PjCard = () => {
    return (
        <div className="base-card pj-card">
            <div className="pj-card-line1">
                <div className="name-pj">
                    <h2>Jonielson Vieira</h2>
                </div>
                <div className="cnpj-pj">
                    <p>CNPJ: 22.123.000/1500-00</p>
                </div>
                <div className="cpf-pj">
                    <p>CPF: 390.199.288-11</p>
                </div>
                <div className="status-pj">
                    <h2>INATIVO</h2>
                </div>
            </div>
            <div className="pj-card-line2">
                <div className="razao-social-pj">
                    <p>Citrus Mania</p>
                </div>
                <div className="endereco-pj">
                    <p>Rua Alessandro Bonci, 78, Elsorado, Mogi Mirim, SP, 13800-456</p>
                </div>
            </div>
        </div>
    );
}

export default PjCard;