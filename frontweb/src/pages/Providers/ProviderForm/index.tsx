import './styles.css';

const ProviderForm = () => {
    return (
        <div className="page-container form-provider-page-container-especific">
            <div className="form-provider-titulo-container">
                <h1>Cadastro de Fornecedor</h1>
            </div>
            <form action=''>
                <div className='form-provider-fields-container'>
                    <div>
                        <input type="text" className='form-control base-card form-provider-field form-provider-col5-466'/>
                    </div>
                    <div>
                        <input type="text" className='form-control base-card form-provider-field form-provider-col2-178'/>
                    </div>
                    <div>
                        <input type="text" className='form-control base-card form-provider-field form-provider-col2-178'/>
                    </div>
                    <div>
                        <input type="text" className='form-control base-card form-provider-field form-provider-col3-274'/>
                    </div>
                    <div>
                        <input type="text" className='form-control base-card form-provider-field form-provider-col5-466'/>
                    </div>
                    <div>
                        <input type="text" className='form-control base-card form-provider-field form-provider-col1-82'/>
                    </div>
                    <div>
                        <input type="text" className='form-control base-card form-provider-field form-provider-col3-274' />
                    </div>
                    <div>
                        <input type="text" className='form-control base-card form-provider-field form-provider-col3-274' />
                    </div>
                    <div>
                        <input type="text" className='form-control base-card form-provider-field form-provider-col3-274'/>
                    </div>
                    <div>
                        <input type="text" className='form-control base-card form-provider-field form-provider-col2-178'/>
                    </div>
                    <div>
                        <input type="text" className='form-control base-card form-provider-field form-provider-col5-466'/>
                    </div>
                    <div>
                        <input type="text" className='form-control base-card form-provider-field form-provider-col2-178'/>
                    </div>
                </div>
                <div className='provider-crud-buttons-container'>
                    <button className='btn providers-cancel-button'>CANCELAR</button>
                    <button className='btn providers-save-button'>SALVAR</button>
                </div>
            </form>
        </div>
    )
}

export default ProviderForm;