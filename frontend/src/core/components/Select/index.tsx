import React from 'react'

import './styles.scss'

type SelectProp = {
    filter: string
}

const Select = ( { filter }: SelectProp) => (
    <div>
        <select className='select-filter input-filter'>
            <option selected value={filter}>{filter}</option>
            <option value="Mateus">Mateus</option>
            <option value="Ana">Ana</option>
            <option value="Clayton">Clayton</option>
            <option value="Pfizer">Pfizer</option>
        </select>
    </div>
)

export default Select