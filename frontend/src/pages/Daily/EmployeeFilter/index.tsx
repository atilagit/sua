import Select from 'core/components/Select'
import Table from 'core/components/Table'
import React from 'react'

const EmployeeFilter = () => (
    <div className="filter-client">
        <Select filter='Funcionário'/>
        <div className="table-click">
            <Table
                name="Antônio da Melo de Conceição Vieira"
                admissionDate="28/07/2021"
                cnpj="22.123.000/1500-00"
                cpf="123.195.299-12"
                corporateName="Citrus"
                address="Rua Joaquim Filadéfia, Avenida das flores, nº153 CEP: 400500-000"
            />
        </div>
    </div>
)

export default EmployeeFilter