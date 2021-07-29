import React from 'react'
import Select from 'core/components/Select'
import Table from 'core/components/Table'

const ProviderFilter = () => (
    <div className="filter-provider">
        <Select filter='Fornecedor'/>
        <div className="table-click">
            <Table
                name="Antônio da Melo de Conceição Vieira"
                cnpj="22.123.000/1500-00"
                cpf="123.195.299-12"
            />
        </div>
    </div>
)

export default ProviderFilter