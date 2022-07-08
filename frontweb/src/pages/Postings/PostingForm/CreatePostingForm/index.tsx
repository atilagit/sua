import './styles.css';

const CreatePostingForm = () => {
    return (
        <div className="page-container form-create-posting-page-container-especific">
            <form action=''>
                <div className='form-create-posting-fields-container'>
                    <div>
                        <input type="text" className='form-control base-card form-create-posting-field form-create-posting-col3-274' />
                    </div>
                    <div>
                        <input type="text" className='form-control base-card form-create-posting-field form-create-posting-col3-274' />
                    </div>
                    <div>
                        <input type="text" className='form-control base-card form-create-posting-field form-create-posting-col2-178' />
                    </div>
                    <div>
                        <input type="text" className='form-control base-card form-create-posting-field form-create-posting-col2-178' />
                    </div>
                    <div>
                        <input type="text" className='form-control base-card form-create-posting-field form-create-posting-col2-178' />
                    </div>
                    <div>
                        <input type="text" className='form-control base-card form-create-posting-field form-create-posting-col2-178' />
                    </div>
                    <div>
                        <input type="text" className='form-control base-card form-create-posting-field form-create-posting-col2-178' />
                    </div>
                    <div>
                        <input type="text" className='form-control base-card form-create-posting-field form-create-posting-col2-178' />
                    </div>
                    <div>
                        <input type="text" className='form-control base-card form-create-posting-field form-create-posting-col5-466' />
                    </div>
                    <div>
                        <input type="text" className='form-control base-card form-create-posting-field form-create-posting-col1-82' />
                    </div>
                </div>
                <div className='create-posting-crud-buttons-container'>
                    <button className='btn create-postings-cancel-button'>CANCELAR</button>
                    <button className='btn create-postings-save-button'>SALVAR</button>
                </div>
            </form>
        </div>
    )
}

export default CreatePostingForm;