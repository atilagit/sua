import { AxiosRequestConfig } from 'axios';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router-dom';
import { Posting } from 'types/posting';
import { ShortEmployee } from 'types/shortEmployee'
import { requestBackend } from 'util/requests';
import './styles.css';

type UrlParams = {
    postingId: string;
}

const CreatePostingForm = () => {

    const { postingId } = useParams<UrlParams>();

    const isEditing = postingId !== 'create';

    const empregado: ShortEmployee = {
        "id": 2,
        "name": ""
    }

    const history = useHistory();

    const { 
        register, 
        handleSubmit, 
        formState: { errors },
        setValue
     } = useForm<Posting>();

     useEffect(() => {
        if (isEditing){
            requestBackend({url: `/postings/${postingId}`, withCredentials: true})
            .then((response) => {

                const posting = response.data as Posting;

                setValue('id', posting.id);
                setValue('date', posting.date);
                setValue('unit', posting.unit);
                setValue('quantity', posting.quantity);
                setValue('price', posting.price);
                setValue('note', posting.note);
                setValue('salaryAdvance', posting.salaryAdvance);
                setValue('resolved', posting.resolved);
                setValue('employee', posting.employee);
                setValue('client', posting?.client);
                setValue('provider', posting?.provider);
            })
        }
     }, [isEditing, postingId, setValue])

    const onSubmit = (formData: Posting) => {

        const data = { ...formData, salaryAdvance: false }

        const config: AxiosRequestConfig = {
            method: isEditing ? 'PUT' :'POST',
            url: isEditing ? `/postings/${postingId}` :"/postings",
            data: data,
            withCredentials: true
        }

        requestBackend(config)
            .then(() => {
                history.replace("/postings");
            });
    };

    const handleCancel = () => {
        isEditing
            ? history.replace(`/postings/details/${postingId}`)
            : history.replace("/postings");
    }

    return (
        <div className="page-container form-create-posting-page-container-especific">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='form-create-posting-fields-container'>
                    <div>
                        <label about='provider'>Fornecedor</label>
                        <input
                            {...register("provider.id")}
                            type="text"
                            className='form-control base-card form-create-posting-field form-create-posting-col3-274'
                            name="provider"
                            defaultValue={empregado.id}
                        />
                    </div>
                    <div>
                        <label about='client'>Cliente</label>
                        <input
                            {...register("client.id")}
                            type="text"
                            className='form-control base-card form-create-posting-field form-create-posting-col3-274'
                            name="client"
                            defaultValue={empregado.id}
                        />
                    </div>
                    <div>
                        <label about='date'>Data*</label>
                        <input
                            {...register("date", {
                                required: 'Campo obrigatório'
                            })}
                            type='date'
                            className={`form-control base-card form-create-posting-field form-create-posting-col2-178 ${errors.date ? 'is-invalid' : ''}`}
                            placeholder="00.000.000/0000-00"
                            name="date"
                        />
                        <div className="invalid-feedback d-block">{errors.date?.message}</div>
                    </div>
                    <div>
                        <label about='unit'>Unidade*</label>
                        <select 
                            value="unit" 
                            className={`form-control base-card form-create-posting-field form-create-posting-col2-178 ${errors.unit ? 'is-invalid' : ''}`}
                            {...register("unit", {
                                required: 'Campo obrigatório'
                            })}>
                            <option value="KG">KG</option>
                            <option value="HOURS">Hora</option>
                            <option value="DAY">Diária</option>
                        </select>
                        <div className="invalid-feedback d-block">{errors.unit?.message}</div>
                    </div>
                    <div>
                        <label about='price'>Preço*</label>
                        <input 
                            {...register("price", {
                                required: 'Campo obrigatório'
                            })}
                            type="text" 
                            className={`form-control base-card form-create-posting-field form-create-posting-col2-178 ${errors.price ? 'is-invalid' : ''}`} 
                            name="price"
                        />
                        <div className="invalid-feedback d-block">{errors.price?.message}</div>
                    </div>
                    <div>
                        <label about='employee'>Funcionário*</label>
                        <input 
                            {...register("employee.id", {
                                required: 'Campo obrigatório'
                            })}
                            type="text" 
                            className={`form-control base-card form-create-posting-field form-create-posting-col2-178 ${errors.employee?.id ? 'is-invalid' : ''}`} 
                            name="employee"
                            defaultValue={empregado.id}
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
                            className={`form-control base-card form-create-posting-field form-create-posting-col2-178 ${errors.quantity ? 'is-invalid' : ''}`} 
                            name="quantity"
                        />
                        <div className="invalid-feedback d-block">{errors.quantity?.message}</div>
                    </div>
                    <div>
                        <label about='total'>Total</label>
                        <input 
                            type="text" 
                            className='form-control base-card form-create-posting-field form-create-posting-col2-178' 
                            name="total"
                            disabled={true}
                        />
                    </div>
                    <div>
                        <label about='note'>Observação</label>
                        <input 
                            {...register("note")}
                            type="text" 
                            className='form-control base-card form-create-posting-field form-create-posting-col5-466'
                            name="note"
                        />
                    </div>
                    <div>
                        <label about='note'>Resolv.</label>
                        <input 
                            {...register("resolved")}
                            type='text' 
                            className='form-control base-card form-create-posting-field form-create-posting-col1-82' 
                            name="resolved"
                            disabled={isEditing}
                        />
                    </div>
                </div>
                <div className='create-posting-crud-buttons-container'>
                    <button className='btn create-postings-cancel-button' onClick={handleCancel}>
                        CANCELAR
                    </button>
                    <button className='btn create-postings-save-button'>SALVAR</button>
                </div>
            </form>
        </div>
    )
}

export default CreatePostingForm;