import { AxiosRequestConfig } from 'axios';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router-dom';
import Select from 'react-select';
import { Posting } from 'types/posting';
import { ShortEmployee } from 'types/shortEmployee'
import { requestBackend } from 'util/requests';
import './styles.css';

type UrlParams = {
    postingId: string;
}

const CreateSalaryAdvanceForm = () => {

    const { postingId } = useParams<UrlParams>();

    const isEditing = postingId !== 'create';

    const history = useHistory();

    const[selectEmployees, setSelectEmployees] = useState<ShortEmployee[]>([]);

    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue
    } = useForm<Posting>();

    useEffect(() => {
        requestBackend({url: '/employees/active-names', withCredentials: true})
        .then(response => {
            setSelectEmployees(response.data)
        })
     }, []);

    useEffect(() => {
        if (isEditing) {
            requestBackend({ url: `/postings/${postingId}`, withCredentials: true })
                .then((response) => {

                    const posting = response.data as Posting;

                    setValue('id', posting.id);
                    setValue('date', posting.date);
                    setValue('price', posting.price);
                    setValue('note', posting.note);
                    setValue('resolved', posting.resolved);
                    setValue('employee', posting.employee);
                })
        }
    }, [isEditing, postingId, setValue])

    const onSubmit = (formData: Posting) => {

        const data = { 
            ...formData, 
            salaryAdvance: true, 
            unit: "ADVANCE" ,
            quantity: 1
        }

        const config: AxiosRequestConfig = {
            method: isEditing ? 'PUT' :'POST',
            url: isEditing ? `/postings/${postingId}` : "/postings",
            data: data,
            withCredentials: true
        }

        requestBackend(config)
            .then((response) => {
                const posting = response.data as Posting;
                history.replace(`/postings/details/${posting.id}`)
            });
    };

    const handleCancel = () => {
        isEditing
            ? history.replace(`/postings/details/${postingId}`)
            : history.replace("/postings");
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
                            <Select
                                options={selectEmployees}
                                classNamePrefix="employee-select"
                                getOptionLabel={(employee: ShortEmployee) => employee.name}
                                getOptionValue={(employee: ShortEmployee) => String(employee.id)}
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
                                disabled={isEditing}
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