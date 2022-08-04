import { AxiosRequestConfig } from 'axios';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router-dom';
import { Provider } from 'types/provider';
import { requestBackend } from 'util/requests';
import './styles.css';

type UrlParams = {
    providerId: string;
}

const ProviderForm = () => {

    const { providerId } = useParams<UrlParams>();

    const isEditing = providerId !== 'create';

    const history = useHistory();

    const { 
        register, 
        handleSubmit, 
        formState: { errors },
        setValue
     } = useForm<Provider>();

     useEffect(() => {
        if (isEditing){
            requestBackend({url: `/providers/${providerId}`, withCredentials: true})
            .then((response) => {

                const provider = response.data as Provider;

                setValue('id', provider.id);
                setValue('name', provider.name);
                setValue('abbreviatedName', provider.abbreviatedName);
                setValue('corporateName', provider.corporateName);
                setValue('cpf', provider.cpf);
                setValue('cnpj', provider.cnpj);
                setValue('active', provider.active);
                setValue('address', provider?.address);
            })
        }
     }, [isEditing, providerId, setValue])

    const onSubmit = (formData: Provider) => {

        const config: AxiosRequestConfig = {
            method: isEditing ? 'PUT' :'POST',
            url: isEditing ? `/providers/${providerId}` :"/providers",
            data: formData,
            withCredentials: true
        }

        requestBackend(config)
        .then((response) => {
            const provider = response.data as Provider;
            history.replace(`/providers/details/${provider.id}`)
        });
    };

    const handleCancel = () => {
        isEditing
            ? history.replace(`/providers/details/${providerId}`)
            : history.replace("/providers");
    }

    return (
        <div className="page-container form-provider-page-container-especific">
            <div className="form-provider-titulo-container">
                <h1>{isEditing ? "Editar Fornecedor" : "Cadastro de Fornecedor"}</h1>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='form-provider-fields-container'>
                    <div>
                        <label about='name'>Nome do Contato*</label>
                        <input
                            {...register("name", {
                                required: 'Campo obrigatório'
                            })}
                            type="text"
                            className={`form-control base-card form-provider-field form-provider-col5-466 ${errors.name ? 'is-invalid' : ''}`}
                            placeholder="Ex: João Batista da Silva"
                            name="name"
                        />
                        <div className="invalid-feedback d-block">{errors.name?.message}</div>
                    </div>
                    <div>
                        <label about='cnpj'>CNPJ</label>
                        <input
                            {...register("cnpj")}
                            type="text" 
                            className='form-control base-card form-provider-field form-provider-col2-178'
                            placeholder="00.000.000/0000-00"
                            name="cnpj"
                        />
                    </div>
                    <div>
                        <label about='cpf'>CPF</label>
                        <input 
                            {...register("cpf")}
                            type="text" 
                            className='form-control base-card form-provider-field form-provider-col2-178'
                            placeholder="000.000.000-00"
                            name="cpf"
                        />
                    </div>
                    <div>
                        <label about='corporateName'>Razão Social</label>
                        <input 
                            {...register("corporateName")}
                            type="text" 
                            className='form-control base-card form-provider-field form-provider-col3-274' 
                            name="corporateName"
                        />
                    </div>
                    <div>
                        <label about='address.street'>Rua</label>
                        <input 
                            {...register("address.street")}
                            type="text" 
                            className='form-control base-card form-provider-field form-provider-col5-466' 
                            name="address.street"
                        />
                    </div>
                    <div>
                        <label about='number'>Nº</label>
                        <input 
                            {...register("address.number")}
                            type="text" 
                            className='form-control base-card form-provider-field form-provider-col1-82' 
                            name="address.number"
                        />
                    </div>
                    <div>
                        <label about='neighborhood'>Bairro</label>
                        <input 
                            {...register("address.neighborhood")}
                            type="text" 
                            className='form-control base-card form-provider-field form-provider-col3-274' 
                            name="address.neighborhood"
                        />
                    </div>
                    <div>
                        <label about='city'>Cidade</label>
                        <input 
                            {...register("address.city")}
                            type="text" 
                            className='form-control base-card form-provider-field form-provider-col3-274' 
                            name="address.city"
                        />
                    </div>
                    <div>
                        <label about='state'>Estado</label>
                        <input 
                            {...register("address.state")}
                            type="text" 
                            className='form-control base-card form-provider-field form-provider-col3-274' 
                            name="address.state"
                        />
                    </div>
                    <div>
                        <label about='cep'>CEP</label>
                        <input 
                            {...register("address.cep")}
                            type="text" 
                            className='form-control base-card form-provider-field form-provider-col2-178' 
                            placeholder="00000-000"
                            name="address.cep"
                        />
                    </div>
                    <div>
                        <label about='complement'>Complemento</label>
                        <input 
                            {...register("address.complement")}
                            type="text" 
                            className='form-control base-card form-provider-field form-provider-col5-466' 
                            name="address.complement"
                        />
                    </div>
                    <div>
                        <label about='active'>Status</label>
                        <input 
                            {...register("active")}
                            type="text" 
                            className='form-control base-card form-provider-field form-provider-col2-178' 
                            name="active"
                            disabled={isEditing}
                        />
                    </div>
                </div>
                <div className='provider-crud-buttons-container'>
                    <button className='btn providers-cancel-button' onClick={handleCancel}>
                        CANCELAR
                    </button>
                    <button className='btn providers-save-button'>SALVAR</button>
                </div>
            </form>
        </div>
    )
}

export default ProviderForm;