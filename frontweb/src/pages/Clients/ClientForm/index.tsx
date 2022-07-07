import './styles.css';

const ClientForm = () => {
    return (
        <div className="page-container form-client-page-container-especific">
            <div className="form-client-titulo-container">
                <h1>Cadastro de Cliente</h1>
            </div>
            <form action=''>
                <div className='form-client-fields-container'>
                    <div>
                        <input type="text" className='form-control base-card form-client-field form-client-col5-466' />
                    </div>
                    <div>
                        <input type="text" className='form-control base-card form-client-field form-client-col2-178' />
                    </div>
                    <div>
                        <input type="text" className='form-control base-card form-client-field form-client-col2-178' />
                    </div>
                    <div>
                        <input type="text" className='form-control base-card form-client-field form-client-col3-274' />
                    </div>
                    <div>
                        <input type="text" className='form-control base-card form-client-field form-client-col5-466' />
                    </div>
                    <div>
                        <input type="text" className='form-control base-card form-client-field form-client-col1-82' />
                    </div>
                    <div>
                        <input type="text" className='form-control base-card form-client-field form-client-col3-274' />
                    </div>
                    <div>
                        <input type="text" className='form-control base-card form-client-field form-client-col3-274' />
                    </div>
                    <div>
                        <input type="text" className='form-control base-card form-client-field form-client-col3-274' />
                    </div>
                    <div>
                        <input type="text" className='form-control base-card form-client-field form-client-col2-178' />
                    </div>
                    <div>
                        <input type="text" className='form-control base-card form-client-field form-client-col5-466' />
                    </div>
                    <div>
                        <input type="text" className='form-control base-card form-client-field form-client-col2-178' />
                    </div>
                </div>
                <div className='client-crud-buttons-container'>
                    <button className='btn clients-cancel-button'>CANCELAR</button>
                    <button className='btn clients-save-button'>SALVAR</button>
                </div>
            </form>
        </div>
    )
}

export default ClientForm;