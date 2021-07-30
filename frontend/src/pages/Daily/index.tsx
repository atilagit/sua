import React from "react";
import Select from "core/components/Select";
import Table from "core/components/Table";
import DateFilter from "core/components/DateFilter";

import './styles.scss'
import CheckboxFilter from "core/components/Checkbox";

const Daily = () => (
  <div className="general-filter">
    <div className="general-filter-types">
      <Select filter="Funcionário" />
      <DateFilter />
      <Select filter="Fornecedor" />
      <Select filter="Cliente" />
      <div className="checkbox-input-filter input-filter">
        <CheckboxFilter nameFilter="Pendente"/>
        <CheckboxFilter nameFilter="Resolvido"/>
      </div>
    </div>
    <Table
      name="Antônio da Melo de Conceição Vieira"
      admissionDate="28/07/2021"
      cpf="123.195.299-12"
      status="ativo"
    />
  </div >
)


export default Daily