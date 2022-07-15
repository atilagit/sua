import { AxiosRequestConfig } from 'axios';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { Posting } from 'types/posting';
import { ShortEmployee } from 'types/shortEmployee'
import { requestBackend } from 'util/requests';
import './styles.css';

const CreateSalaryAdvanceForm = () => {

    const empregado: ShortEmployee = {
        "id": 1,
        "name": ""
    }

    const history = useHistory();

    const { register, handleSubmit, formState: { errors } } = useForm<Posting>();

    const onSubmit = (formData: Posting) => {

        const data = { 
            ...formData, 
            salaryAdvance: true, 
            unit: "ADVANCE" ,
            quantity: 1
        }

        const config: AxiosRequestConfig = {
            method: 'POST',
            url: "/postings",
            data: data,
            withCredentials: true
        }

        requestBackend(config)
            .then(() => {
                history.replace("/postings");
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
                                defaultValue={empregado.id}
                            />
                            <div className="invalid-feedback d-block">{errors.employee?.id?.message}</div>
                        </div>
                        <div>
                            <label about='price'>Valor*</label>
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
                        <div>
                            <label about='note'>Observação</label>
                            <input 
                                {...register("note")}
                                type="text" 
                                className='form-control base-card form-create-salary-advance-field form-create-salary-advance-col7-645'
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