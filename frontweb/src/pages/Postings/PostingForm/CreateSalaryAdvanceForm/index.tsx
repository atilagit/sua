import './styles.css';

const CreateSalaryAdvanceForm = () => {
    return (
        <div className="page-container form-create-salary-advance-page-container-especific">
            <form action=''>
                <div className='form-create-salary-advance-fields-container'>
                    <div className='form-create-salary-advance-first-line'>
                        <div>
                            <input type="text" className='form-control base-card form-create-salary-advance-field form-create-salary-advance-col2-178' />
                        </div>
                        <div>
                            <input type="text" className='form-control base-card form-create-salary-advance-field form-create-salary-advance-col2-178' />
                        </div>
                        <div>
                            <input type="text" className='form-control base-card form-create-salary-advance-field form-create-salary-advance-col2-178' />
                        </div>
                    </div>
                    <div className='form-create-salary-advance-second-line'>
                        <div>
                            <input type="text" className='form-control base-card form-create-salary-advance-field form-create-salary-advance-col2-178' />
                        </div>
                        <div>
                            <input type="text" className='form-control base-card form-create-salary-advance-field form-create-salary-advance-col2-178' />
                        </div>
                        <div>
                            <input type="text" className='form-control base-card form-create-salary-advance-field form-create-salary-advance-col2-178' />
                        </div>
                        <div>
                            <input type="text" className='form-control base-card form-create-salary-advance-field form-create-salary-advance-col5-466' />
                        </div>
                        <div>
                            <input type="text" className='form-control base-card form-create-salary-advance-field form-create-salary-advance-col1-82' />
                        </div>
                    </div>
                </div>
                <div className='create-salary-advance-crud-buttons-container'>
                    <button className='btn create-salary-advances-cancel-button'>CANCELAR</button>
                    <button className='btn create-salary-advances-save-button'>SALVAR</button>
                </div>
            </form >
        </div >
    )
}

export default CreateSalaryAdvanceForm;