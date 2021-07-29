import React from 'react'
import './styles.scss'

type DataProps = {
    name?: string,
    admissionDate?: string,
    cnpj?: string,
    cpf?: string,
    corporateName?: string,
    address?: string,
    status?: string
}

const Table = ({ name, admissionDate, cnpj, cpf, corporateName, address, status }: DataProps) => (
    <table className="table-default">
        <thead>
            <tr>
                {name && <th>Nome</th>}
                {admissionDate && <th>Data de Admissão</th>}
                {cnpj && <th>CNPJ</th>}
                {cpf && <th>CPF</th>}
                {corporateName && <th>Razão Social</th>}
                {address && <th>Endereço</th>}
                {status && <th>Status</th>}
            </tr>
        </thead>
        <tbody>
            <tr>
                {name &&
                    <td>
                        <div className="table-line">
                            {name}
                        </div>
                    </td>
                }
                {admissionDate &&
                    <td>
                        <div className="table-line">
                            {admissionDate}
                        </div>
                    </td>
                }
                {cnpj &&
                    <td>
                        <div className="table-line">
                            {cnpj}
                        </div>
                    </td>
                }
                {cpf &&
                    <td>
                        <div className="table-line">
                            {cpf}
                        </div>
                    </td>
                }
                {corporateName &&
                    <td>
                        <div className="table-line">
                            {corporateName}
                        </div>
                    </td>
                }
                {address &&
                    <td>
                        <div className="table-line">
                            {address}
                        </div>
                    </td>
                }
                {status &&
                    <td>
                        <div className="table-line">
                            {status}
                        </div>
                    </td>
                }
            </tr>
            <tr>
                {name &&
                    <td>
                        <div className="table-line">
                            {name}
                        </div>
                    </td>
                }
                {admissionDate &&
                    <td>
                        <div className="table-line">
                            {admissionDate}
                        </div>
                    </td>
                }
                {cnpj &&
                    <td>
                        <div className="table-line">
                            {cnpj}
                        </div>
                    </td>
                }
                {cpf &&
                    <td>
                        <div className="table-line">
                            {cpf}
                        </div>
                    </td>
                }
                {corporateName &&
                    <td>
                        <div className="table-line">
                            {corporateName}
                        </div>
                    </td>
                }
                {address &&
                    <td>
                        <div className="table-line">
                            {address}
                        </div>
                    </td>
                }
                {status &&
                    <td>
                        <div className="table-line">
                            {status}
                        </div>
                    </td>
                }
            </tr>
        </tbody>
    </table>
)

export default Table