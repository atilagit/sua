import './styles.css';

const PostingCard = () => {
    return (
        <div className="base-card posting-card">
            <div className="line1">
                <div className="name">
                    <h2>Marinalva Santos</h2>
                </div>
                <div className="data">
                    <p>17/03/2022</p>
                </div>
                <div className="unity-x-price">
                    <p>1 adiantam. x R$ 1.000,00 </p>
                </div>
                <div className="total">
                    <p>Total: R$ 10.900,00</p>
                </div>
                <div className="status">
                    <h2>PENDENTE</h2>
                </div>
            </div>
            <div className="line2">
                <div className="provider">
                    <p>Fornecedor: Antônio</p>
                </div>
                <div className="client">
                    <p>Cliente: Anderson</p>
                </div>
                <div className="obs">
                    <p>Obs.: Um exemplo de observaçao legal e de tamanho razoavelmente grand...</p>
                </div>
            </div>
        </div>
    );
}

export default PostingCard;