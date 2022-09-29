import { AxiosRequestConfig } from 'axios';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router-dom';
import { Client } from 'types/client';
import { requestBackend } from 'util/requests';
import { toast } from 'react-toastify';
import './styles.css';

type UrlParams = {
    clientId: string;
}


const ClientForm = () => {

    const { clientId } = useParams<UrlParams>();

    const isEditing = clientId !== 'create';

    const history = useHistory();

    const { 
        register, 
        handleSubmit, 
        formState: { errors },
        setValue
     } = useForm<Client>();

     useEffect(() => {
        if (isEditing){
            requestBackend({url: `/clients/${clientId}`, withCredentials: true})
            .then((response) => {

                const client = response.data as Client;

                setValue('id', client.id);
                setValue('contact', client.contact);
                setValue('abbreviatedName', client.abbreviatedName);
                setValue('corporateName', client.corporateName);
                setValue('cpf', client.cpf);
                setValue('cnpj', client.cnpj);
                setValue('active', client.active);
                setValue('address', client.address);
            })
        }
     }, [isEditing, clientId, setValue])

    const onSubmit = (formData: Client) => {

        const config: AxiosRequestConfig = {
            method: isEditing ? 'PUT' : 'POST',
            url: isEditing ? `/clients/${clientId}` : "/clients",
            data: formData,
            withCredentials: true
        }

        requestBackend(config)
            .then((response) => {
                toast.success('Cliente cadastrado com sucesso!');
                const client = response.data as Client;
                history.replace(`/clients/details/${client.id}`)
            })
            .catch(() => {
                toast.error('Erro ao tentar cadastrar o cliente');
            });
    };

    const handleCancel = () => {
        isEditing
            ? history.replace(`/clients/details/${clientId}`)
            : history.replace("/clients");
    }

    return (
        <div className="page-container form-client-page-container-especific">
            <div className="form-client-titulo-container">
                <h1>{isEditing ? "Editar Cliente" : "Cadastro de Cliente"}</h1>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='form-client-fields-container'>
                    <div>
                    <label about='contact'>Nome do Contato*</label>
                        <input
                            {...register("contact", {
                                required: 'Campo obrigatório'
                            })}
                            type="text"
                            className={`form-control base-card form-client-field form-client-col5-466 ${errors.contact ? 'is-invalid' : ''}`}
                            placeholder="Ex: João Batista da Silva"
                            name="contact"
                        />
                        <div className="invalid-feedback d-block">{errors.contact?.message}</div>
                    </div>
                    <div>
                        <label about='cnpj'>CNPJ</label>
                        <input
                            {...register("cnpj")}
                            type="text"
                            className='form-control base-card form-client-field form-client-col2-178'
                            placeholder="00.000.000/0000-00"
                            name="cnpj"
                        />
                    </div>
                    <div>
                        <label about='cpf'>CPF</label>
                        <input 
                            {...register("cpf")}
                            type="text" 
                            className='form-control base-card form-client-field form-client-col2-178'
                            placeholder="000.000.000-00"
                            name="cpf"
                        />
                    </div>
                    <div>
                        <label about='corporateName'>Razão Social</label>
                        <input 
                            {...register("corporateName")}
                            type="text" 
                            className='form-control base-card form-client-field form-client-col3-274' 
                            name="corporateName"
                        />
                    </div>
                    <div>
                        <label about='address.street'>Rua</label>
                        <input 
                            {...register("address.street")}
                            type="text" 
                            className='form-control base-card form-client-field form-client-col5-466' 
                            name="address.street"
                        />
                    </div>
                    <div>
                        <label about='number'>Nº</label>
                        <input 
                            {...register("address.number")}
                            type="text" 
                            className='form-control base-card form-client-field form-client-col1-82' 
                            name="address.number"
                        />
                    </div>
                    <div>
                        <label about='neighborhood'>Bairro</label>
                        <input 
                            {...register("address.neighborhood")}
                            type="text" 
                            className='form-control base-card form-client-field form-client-col3-274' 
                            name="address.neighborhood"
                        />
                    </div>
                    <div>
                        <label about='city'>Cidade</label>
                        <input 
                            {...register("address.city")}
                            type="text" 
                            className='form-control base-card form-client-field form-client-col3-274' 
                            name="address.city"
                        />
                    </div>
                    <div>
                        <label about='state'>Estado</label>
                        <input 
                            {...register("address.state")}
                            type="text" 
                            className='form-control base-card form-client-field form-client-col3-274' 
                            name="address.state"
                        />
                    </div>
                    <div>
                        <label about='cep'>CEP</label>
                        <input 
                            {...register("address.cep")}
                            type="text" 
                            className='form-control base-card form-client-field form-client-col2-178' 
                            placeholder="00000-000"
                            name="address.cep"
                        />
                    </div>
                    <div>
                        <label about='complement'>Complemento</label>
                        <input 
                            {...register("address.complement")}
                            type="text" 
                            className='form-control base-card form-client-field form-client-col5-466' 
                            name="address.complement"
                        />
                    </div>
                    <div>
                        <label about='active'>Status</label>
                        <input 
                            {...register("active")}
                            type="text" 
                            className='form-control base-card form-client-field form-client-col2-178' 
                            name="active"
                            disabled={isEditing}
                        />
                    </div>
                </div>
                <div className='client-crud-buttons-container'>
                    <button className='btn clients-cancel-button' onClick={handleCancel}>
                        CANCELAR
                    </button>
                    <button className='btn clients-save-button'>SALVAR</button>
                </div>
            </form>
        </div>
    )
}

export default ClientForm;