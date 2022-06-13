import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import Button from 'components/Button';

import './styles.css';
import Footer from "components/Footer";
import { requestBackendLogin } from "util/requests";
import { useState } from "react";

type FormData = {
  username: string;
  password: string;
}

const Auth = () => {

  const [hasError, setHasError] = useState(false);

  const { register, handleSubmit } = useForm<FormData>();

  const onSubmit = (formData: FormData) => {
    requestBackendLogin(formData)
      .then(response => {
        setHasError(false);
        console.log('SUCESSO', response);
      })
      .catch(error => {
        setHasError(true);
        console.log('ERRO', error);
      });
  };

  return (
    <>
      <div className="auth-container">
        <div className="base-card auth-card">
          <div className="auth-content-container">
            <h2>LOGIN</h2>
            {hasError && (
              <div className="alert alert-danger">
                Erro ao tentar efetuar login.
              </div>
            )}
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4 mt-4">
              <input
                {...register("username")}
                type="text"
                className="form-control base-input"
                placeholder="Email ou CPF"
                name="username"
              />
            </div>
            <div className="mb-1">
              <input
                {...register("password")}
                type="password"
                className="form-control base-input "
                placeholder="Password"
                name="password"
              />
            </div>
            <Link to="/auth/recover" className="login-link-recover">
              Esqueci a senha
            </Link>
            <div className="auth-button-container">
              <Button text="ENTRAR" />
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Auth;