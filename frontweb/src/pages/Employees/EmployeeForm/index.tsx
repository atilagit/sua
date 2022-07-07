import './styles.css';

const EmployeeForm = () => {
    return (
        <div className="page-container form-employee-page-container-especific">
            <form action=''>
                <div className='form-title-container'>
                    <div className="form-employee-titulo-container">
                        <h1>Cadastro de Funcionário: </h1>
                        <input type="text" className='select-list' />
                    </div>
                </div>
                <div className='form-employee-fields-container'>
                    <div>
                        <input type="text" className='form-control base-card form-employee-field form-employee-col5-466' />
                    </div>
                    <div>
                        <input type="text" className='form-control base-card form-employee-field form-employee-col2-178' />
                    </div>
                    <div>
                        <input type="text" className='form-control base-card form-employee-field form-employee-col2-178' />
                    </div>
                    <div>
                        <input type="text" className='form-control base-card form-employee-field form-employee-col3-274' />
                    </div>
                    <div>
                        <input type="text" className='form-control base-card form-employee-field form-employee-col5-466' />
                    </div>
                    <div>
                        <input type="text" className='form-control base-card form-employee-field form-employee-col1-82' />
                    </div>
                    <div>
                        <input type="text" className='form-control base-card form-employee-field form-employee-col3-274' />
                    </div>
                    <div>
                        <input type="text" className='form-control base-card form-employee-field form-employee-col3-274' />
                    </div>
                    <div>
                        <input type="text" className='form-control base-card form-employee-field form-employee-col3-274' />
                    </div>
                    <div>
                        <input type="text" className='form-control base-card form-employee-field form-employee-col2-178' />
                    </div>
                    <div>
                        <input type="text" className='form-control base-card form-employee-field form-employee-col5-466' />
                    </div>
                    <div>
                        <input type="text" className='form-control base-card form-employee-field form-employee-col2-178' />
                    </div>
                </div>
                <div className='employee-crud-buttons-container'>
                    <button className='btn employees-cancel-button'>CANCELAR</button>
                    <button className='btn employees-save-button'>SALVAR</button>
                </div>
            </form>
        </div>
    )
}

export default EmployeeForm;