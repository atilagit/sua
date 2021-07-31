import React from "react";
import Select from "core/components/Select";
import DateFilter from "core/components/DateFilter";

import CheckboxFilter from "core/components/Checkbox";
import './styles.scss'
import '../../core/components/Table/styles.scss'

const Daily = () => (
  <div className="general-filter">
    <div className="general-filter-types">
      <Select filter="Funcionário" />
      <div className="date-filter input-filter">
        <div className="from">
          <span>De:</span>
          <DateFilter />
        </div>
        <div className='to'>
          <span>Até:</span>
          <DateFilter />
        </div>
      </div>
      <Select filter="Fornecedor" />
      <Select filter="Cliente" />
      <div className="checkbox-input-filter input-filter">
        <CheckboxFilter nameFilter="Pendente" />
        <CheckboxFilter nameFilter="Resolvido" />
      </div>
    </div>
    <table className="table-default">
      <thead>
        <tr>
          <th><CheckboxFilter nameFilter=''/></th>
          <th>Funcionário</th>
          <th>Data</th>
          <th>Unidade</th>
          <th>Fornecedor</th>
          <th>Cliente</th>
          <th>Preço</th>
          <th>Total</th>
          <th>Obervação</th>
          <th>Situação</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td> <CheckboxFilter nameFilter=''/> </td>
          <td>
            <div className="table-line">
              Maria
            </div>
          </td>
          <td>
            <div className="table-line">
              <DateFilter />
            </div>
          </td>
          <td>
            <div className="table-line">
              120,52kg
            </div>
          </td>
          <td>
            <div className="table-line">
              Antonio
            </div>
          </td>
          <td>
            <div className="table-line">
              Clayton
            </div>
          </td>
          <td>
            <div className="table-line">
              R$0,50
            </div>
          </td>
          <td>
            <div className="table-line">
              R$55,00
            </div>
          </td>
          <td>
            <div className="table-line">
              Hoje fez muito frio
            </div>
          </td>
          <td>
            <div className="table-line">
              Pendente
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div >
)

export default Daily