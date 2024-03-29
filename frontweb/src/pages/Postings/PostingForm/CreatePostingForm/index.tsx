import { AxiosRequestConfig } from 'axios';
import { useEffect, useState } from 'react';
import CurrencyInput from 'react-currency-input-field';
import { useForm, Controller } from 'react-hook-form';
import { useHistory, useParams } from 'react-router-dom';
import Select from 'react-select';
import { Posting } from 'types/posting';
import { ShortClient } from 'types/shortClient';
import { ShortEmployee } from 'types/shortEmployee';
import { ShortProvider } from 'types/shortProvider';
import { UnitDTO } from 'types/unitDto';
import { formatPrice, replaceCommaWithDot } from 'util/formatters';
import { requestBackend } from 'util/requests';
import { toast } from 'react-toastify';
import './styles.css';

type UrlParams = {
    postingId: string;
}

const CreatePostingForm = () => {

    const { postingId } = useParams<UrlParams>();

    const isEditing = postingId !== 'create';

    const history = useHistory();

    const [selectEmployees, setSelectEmployees] = useState<ShortEmployee[]>([]);
    const [selectClients, setSelectClients] = useState<ShortClient[]>([]);
    const [selectProviders, setSelectProviders] = useState<ShortProvider[]>([]);
    const [selectUnits, setselectUnits] = useState<UnitDTO[]>([]);

    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
        control
    } = useForm<Posting>();

    useEffect(() => {
        requestBackend({ url: '/employees/active-names', withCredentials: true })
            .then(response => {
                setSelectEmployees(response.data)
            })
    }, []);

    useEffect(() => {
        requestBackend({ url: '/clients/active-names', withCredentials: true })
            .then(response => {
                setSelectClients(response.data)
            })
    }, []);

    useEffect(() => {
        requestBackend({ url: '/providers/active-names', withCredentials: true })
            .then(response => {
                setSelectProviders(response.data)
            })
    }, []);

    useEffect(() => {
        setselectUnits(
            [
                { value: "KG", label: 'Kg' },
                { value: "HOURS", label: 'Hora(s)' },
                { value: "DAY", label: 'Diária(s)' }
            ]
        )
    }, []);

    useEffect(() => {
        if (isEditing) {
            requestBackend({ url: `/postings/${postingId}`, withCredentials: true })
                .then((response) => {

                    const posting = response.data as Posting;

                    setValue('id', posting.id);
                    setValue('date', posting.date);
                    setValue('unit', posting.unit);
                    setValue('quantity', posting.quantity);
                    setValue('price', posting.price);
                    setValue('total', formatPrice(posting.price * posting.quantity).toString());
                    setValue('note', posting.note);
                    setValue('salaryAdvance', posting.salaryAdvance);
                    setValue('resolved', posting.resolved);
                    setValue('employee', posting.employee);
                    setValue('client', posting?.client);
                    setValue('provider', posting?.provider);
                })
        }
    }, [isEditing, postingId, setValue]);

    const onSubmit = (formData: Posting) => {

        const data = {
            ...formData,
            salaryAdvance: false,
            price: replaceCommaWithDot(formData.price),
            quantity: replaceCommaWithDot(formData.quantity)
        }

        const config: AxiosRequestConfig = {
            method: isEditing ? 'PUT' : 'POST',
            url: isEditing ? `/postings/${postingId}` : "/postings",
            data: data,
            withCredentials: true
        }

        requestBackend(config)
            .then((response) => {
                const action = config.method === "PUT" ? "alterado" : "cadastrado";
                toast.success('Lançamento ' +  action + ' com sucesso!');
                const posting = response.data as Posting;
                history.replace(`/postings/details/${posting.id}`)
            })
            .catch(() => {
                const action = config.method === "PUT" ? "alterar" : "cadastrar";
                toast.error('Erro ao tentar ' + action + ' o lançamento');
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
                        <Controller
                            name='provider'
                            rules={{ required: false }}
                            control={control}
                            render={({ field }) => (
                                <Select {...field}
                                    options={selectProviders}
                                    classNamePrefix="provider-select"
                                    getOptionLabel={(provider: ShortProvider) => provider.firstAndLastName}
                                    getOptionValue={(provider: ShortProvider) => String(provider.id)}
                                />
                            )}
                        />
                    </div>
                    <div>
                        <label about='client'>Cliente</label>
                        <Controller
                            name='client'
                            rules={{ required: false }}
                            control={control}
                            render={({ field }) => (
                                <Select {...field}
                                    options={selectClients}
                                    classNamePrefix="client-select"
                                    getOptionLabel={(client: ShortClient) => client.firstAndLastName}
                                    getOptionValue={(client: ShortClient) => String(client.id)}
                                />
                            )}
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
                        <Controller
                            name='unit'
                            rules={{ required: true }}
                            control={control}
                            render={({ field }) => (
                                <Select {...field}
                                    options={selectUnits}
                                    classNamePrefix="unity-select"
                                />
                            )}
                        />
                        {errors.unit && (
                            <div className="invalid-feedback d-block">
                                Campo obrigatório
                            </div>
                        )}
                    </div>

                    <div>
                        <label about='price'>Preço*</label>
                        <Controller
                            name='price'
                            rules={{ required: 'Campo obrigatório' }}
                            control={control}
                            render={({ field }) => (
                                <CurrencyInput
                                    placeholder='R$ 0,00'
                                    className={`form-control base-card form-create-posting-field form-create-posting-col2-178 ${errors.price ? 'is-invalid' : ''}`}
                                    prefix="R$ "
                                    decimalScale = {2}
                                    decimalSeparator=","
                                    groupSeparator="."
                                    value={field.value}
                                    onValueChange={field.onChange}
                                />
                            )}
                        />
                        <div className="invalid-feedback d-block">{errors.price?.message}</div>
                    </div>
                    <div>
                        <label about='employee'>Funcionário*</label>
                        <Controller
                            name='employee'
                            rules={{ required: true }}
                            control={control}
                            render={({ field }) => (
                                <Select {...field}
                                    options={selectEmployees}
                                    classNamePrefix="employee-select"
                                    getOptionLabel={(employee: ShortEmployee) => employee.name}
                                    getOptionValue={(employee: ShortEmployee) => String(employee.id)}
                                />
                            )}
                        />
                        {errors.employee && (
                            <div className="invalid-feedback d-block">
                                Campo obrigatório
                            </div>
                        )}
                    </div>
                    <div>
                        <label about='quantity'>Quantidade*</label>
                        <Controller
                            name='quantity'
                            rules={{ required: 'Campo obrigatório' }}
                            control={control}
                            render={({ field }) => (
                                <CurrencyInput
                                    className={`form-control base-card form-create-posting-field form-create-posting-col2-178 ${errors.quantity ? 'is-invalid' : ''}`}
                                    decimalsLimit = {2}
                                    decimalSeparator=","
                                    groupSeparator="."
                                    value={field.value}
                                    onValueChange={field.onChange}
                                />
                            )}
                        />
                        <div className="invalid-feedback d-block">{errors.quantity?.message}</div>
                    </div>
                    <div>
                        <label about='total'>Total</label>
                        <input
                            {...register("total")}
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