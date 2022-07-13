import { AxiosRequestConfig } from 'axios';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { Employee } from 'types/employee';
import { requestBackend } from 'util/requests';
import './styles.css';

const EmployeeForm = () => {

    const history = useHistory();

    const { register, handleSubmit, formState: { errors } } = useForm<Employee>();

    const onSubmit = (formData: Employee) => {

        const config: AxiosRequestConfig = {
            method: 'POST',
            url: "/employees",
            data: formData,
            withCredentials: true
        }

        requestBackend(config)
            .then(response => {
                console.log(response.data);
            });
    };

    const handleCancel = () => {
        history.replace("/employees");
    }


    return (
        <div className="page-container form-employee-page-container-especific">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='form-title-container'>
                    <div className="form-employee-titulo-container">
                        <h1>Cadastro de Funcionário: </h1>
                        <input 
                        type="text"
                        className='select-list' 
                        placeholder='Básico'
                        />
                    </div>
                </div>
                <div className='form-employee-fields-container'>
                    <div>
                        <label about='name'>Nome*</label>
                        <input
                            {...register("name", {
                                required: 'Campo obrigatório'
                            })}
                            type="text"
                            className={`form-control base-card form-employee-field form-employee-col5-466 ${errors.name ? 'is-invalid' : ''}`}
                            placeholder="Ex: João Batista da Silva"
                            name="name"
                        />
                        <div className="invalid-feedback d-block">{errors.name?.message}</div>
                    </div>
                    <div>
                        <label about='admissionDate'>Data Admissão</label>
                        <input
                            {...register("admissionDate")}
                            type='date'
                            className='form-control base-card form-employee-field form-employee-col2-178'
                            placeholder="00.000.000/0000-00"
                            name="admissionDate"
                        />
                    </div>
                    <div>
                        <label about='cpf'>CPF</label>
                        <input 
                            {...register("cpf")}
                            type="text" 
                            className='form-control base-card form-employee-field form-employee-col2-178'
                            placeholder="000.000.000-00"
                            name="cpf"
                        />
                    </div>
                    <div>
                        <label about='active'>Status</label>
                        <input 
                            {...register("active")}
                            type="text" 
                            className='form-control base-card form-employee-field form-employee-col3-274' 
                            name="active"
                        />
                    </div>
                    <div>
                        <label about='address.street'>Rua</label>
                        <input 
                            {...register("address.street")}
                            type="text" 
                            className='form-control base-card form-employee-field form-employee-col5-466' 
                            name="address.street"
                        />
                    </div>
                    <div>
                        <label about='number'>Nº</label>
                        <input 
                            {...register("address.number")}
                            type="text" 
                            className='form-control base-card form-employee-field form-employee-col1-82' 
                            name="address.number"
                        />
                    </div>
                    <div>
                        <label about='neighborhood'>Bairro</label>
                        <input 
                            {...register("address.neighborhood")}
                            type="text" 
                            className='form-control base-card form-employee-field form-employee-col3-274' 
                            name="address.neighborhood"
                        />
                    </div>
                    <div>
                        <label about='city'>Cidade</label>
                        <input 
                            {...register("address.city")}
                            type="text" 
                            className='form-control base-card form-employee-field form-employee-col3-274' 
                            name="address.city"
                        />
                    </div>
                    <div>
                        <label about='state'>Estado</label>
                        <input 
                            {...register("address.state")}
                            type="text" 
                            className='form-control base-card form-employee-field form-employee-col3-274' 
                            name="address.state"
                        />
                    </div>
                    <div>
                        <label about='cep'>CEP</label>
                        <input 
                            {...register("address.cep")}
                            type="text" 
                            className='form-control base-card form-employee-field form-employee-col2-178' 
                            placeholder="00000-000"
                            name="address.cep"
                        />
                    </div>
                    <div>
                    <label about='complement'>Complemento</label>
                        <input 
                            {...register("address.complement")}
                            type="text" 
                            className='form-control base-card form-employee-field form-employee-col7-645' 
                            name="address.complement"
                        />
                    </div>
                </div>
                <div className='employee-crud-buttons-container'>
                    <button className='btn employees-cancel-button' onClick={handleCancel}>
                        CANCELAR
                    </button>
                    <button className='btn employees-save-button'>SALVAR</button>
                </div>
            </form>
        </div>
    )
}

export default EmployeeForm;