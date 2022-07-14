import { AxiosRequestConfig } from 'axios';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { Posting } from 'types/posting';
import { requestBackend } from 'util/requests';
import './styles.css';

const CreateSalaryAdvanceForm = () => {

    const history = useHistory();

    const { register, handleSubmit, formState: { errors } } = useForm<Posting>();

    const onSubmit = (formData: Posting) => {

        const config: AxiosRequestConfig = {
            method: 'POST',
            url: "/postings",
            data: formData,
            withCredentials: true
        }

        requestBackend(config)
            .then(response => {
                console.log(response.data);
            });
    };

    const handleCancel = () => {
        history.replace("/postings");
    }

    return (
        <div className="page-container form-create-salary-advance-page-container-especific">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='form-create-salary-advance-fields-container'>
                    <div className='form-create-salary-advance-first-line'>
                        <div>
                            <label about='date'>Data*</label>
                            <input
                                {...register("date", {
                                    required: 'Campo obrigatório'
                                })}
                                type='date'
                                className={`form-control base-card form-create-salary-advance-field form-create-salary-advance-col2-178 ${errors.date ? 'is-invalid' : ''}`}
                                placeholder="00.000.000/0000-00"
                                name="date"
                            />
                            <div className="invalid-feedback d-block">{errors.date?.message}</div>
                        </div>
                        <div>
                            <label about='unit'>Unidade*</label>
                            <input 
                                {...register("unit", {
                                    required: 'Campo obrigatório'
                                })}
                                type="text" 
                                className={`form-control base-card form-create-salary-advance-field form-create-salary-advance-col2-178 ${errors.unit ? 'is-invalid' : ''}`} 
                                name="unit"
                            />
                            <div className="invalid-feedback d-block">{errors.unit?.message}</div>
                        </div>
                        <div>
                            <label about='price'>Preço*</label>
                            <input 
                                {...register("price", {
                                    required: 'Campo obrigatório'
                                })}
                                type="text" 
                                className={`form-control base-card form-create-salary-advance-field form-create-salary-advance-col2-178 ${errors.price ? 'is-invalid' : ''}`} 
                                name="price"
                            />
                            <div className="invalid-feedback d-block">{errors.price?.message}</div>
                        </div>
                    </div>
                    <div className='form-create-salary-advance-second-line'>
                        <div>
                            <label about='employee'>Funcionário*</label>
                            <input 
                                {...register("employee.id", {
                                    required: 'Campo obrigatório'
                                })}
                                type="text" 
                                className={`form-control base-card form-create-salary-advance-field form-create-salary-advance-col2-178 ${errors.employee?.id ? 'is-invalid' : ''}`} 
                                name="employee"
                            />
                            <div className="invalid-feedback d-block">{errors.employee?.id?.message}</div>
                        </div>
                        <div>
                            <label about='quantity'>Quantidade*</label>
                            <input 
                                {...register("quantity", {
                                    required: 'Campo obrigatório'
                                })}
                                type="text" 
                                className={`form-control base-card form-create-salary-advance-field form-create-salary-advance-col2-178 ${errors.quantity ? 'is-invalid' : ''}`} 
                                name="quantity"
                            />
                            <div className="invalid-feedback d-block">{errors.quantity?.message}</div>
                        </div>
                        <div>
                            <label about='total'>Total</label>
                            <input 
                                type="text" 
                                className='form-control base-card form-create-salary-advance-field form-create-salary-advance-col2-178' 
                                name="total"
                            />
                        </div>
                        <div>
                            <label about='note'>Observação</label>
                            <input 
                                {...register("note")}
                                type="text" 
                                className='form-control base-card form-create-salary-advance-field form-create-salary-advance-col5-466'
                                name="note"
                            />
                        </div>
                        <div>
                            <label about='note'>Resolv.</label>
                            <input 
                                {...register("resolved")}
                                type='text' 
                                className='form-control base-card form-create-salary-advance-field form-create-salary-advance-col1-82' 
                                name="resolved"
                            />
                        </div>
                    </div>
                </div>
                <div className='create-salary-advance-crud-buttons-container'>
                    <button className='btn create-salary-advances-cancel-button' onClick={handleCancel}>
                        CANCELAR
                        </button>
                    <button className='btn create-salary-advances-save-button'>SALVAR</button>
                </div>
            </form >
        </div >
    )
}

export default CreateSalaryAdvanceForm;