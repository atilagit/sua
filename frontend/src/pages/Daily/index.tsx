import React from "react";
import Select from "core/components/Select";
import Table from "core/components/Table";

const Daily = () => (
    <div className="filter-client">
        <Select filter='Fornecedor'/>
        <div className="table-click">
            <Table
                name="Antônio da Melo de Conceição Vieira"
                cnpj="22.123.000/1500-00"
                cpf="123.195.299-12"
                corporateName="Citrus"
                address="Rua Joaquim Filadéfia, Avenida das flores, nº153 CEP: 400500-000"
            />
        </div>
    </div>
)

export default Daily