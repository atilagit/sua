import React from "react";
import Select from "core/components/Select";
import Table from "core/components/Table";

const Daily = () => (
    <div className="filter-client">
        <Select filter='Funcionário'/>
        <div className="table-click">
            <Table
                name="Antônio da Melo de Conceição Vieira"
                admissionDate="28/07/2021"
                cpf="123.195.299-12"
                status="ativo"
            />
        </div>
    </div>
)

export default Daily