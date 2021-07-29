import React from 'react'
import './styles.scss'

type DataProps = {
    name?: string,
    cnpj?: string,
    cpf?: string,
    corporateName?: string,
    address?: string
}

const Table = ({ name, cnpj, cpf, corporateName, address }: DataProps) => (
    <table className="table-default">
        <thead>
            <tr>
                {name && <th>Nome</th>}
                {cnpj && <th>CNPJ</th>}
                {cpf && <th>CPF</th>}
                {corporateName && <th>Razão Social</th>}
                {address && <th>Endereço</th>}
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
            </tr>
            <tr>
                {name &&
                    <td>
                        <div className="table-line">
                            {name}
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
            </tr>
        </tbody>
    </table>
)

export default Table