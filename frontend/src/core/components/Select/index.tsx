import React from 'react'

import './styles.scss'


const Select = () => (
    <div className="select-filter">
        <select
            name="category"
            className="select mb-5"
        >
            <option value="Mateus" selected>Mateus</option>
            <option value="Ana">Ana</option>
            <option value="Clayton">Clayton</option>
            <option value="Pfizer">Pfizer</option>
        </select>
    </div>

)

export default Select