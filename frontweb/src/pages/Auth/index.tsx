import { useForm } from "react-hook-form";
import { Link, useHistory, useLocation } from 'react-router-dom';
import Button from 'components/Button';
import Footer from "components/Footer";
import { getTokenData, requestBackendLogin, saveAuthData } from "util/requests";
import { useContext, useState } from "react";
import { AuthContext } from "AuthContext";
import './styles.css';

type FormData = {
  username: string;
  password: string;
}

type LocationState = {
  from: string;
}

const Auth = () => {

  const location = useLocation<LocationState>();

  const { from } = location.state || { from: {pathname: '/'}}

  const { setAuthContextData } = useContext(AuthContext);

  const [hasError, setHasError] = useState(false);

  const { register, handleSubmit, formState: {errors} } = useForm<FormData>();

  const history = useHistory();

  const onSubmit = (formData: FormData) => {
    requestBackendLogin(formData)
      .then(response => {
        saveAuthData(response.data);
        setHasError(false);
        setAuthContextData({
          authenticated: true,
          tokenData: getTokenData()
        })
        history.replace(from);
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
                {...register("username", {
                  required: 'Campo obrigatório',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Email inválido'
                  }
                })}
                type="text"
                className={`form-control base-input ${errors.username ? 'is-invalid' : ''}`}
                placeholder="Email ou CPF"
                name="username"
              />
              <div className="invalid-feedback d-block">{errors.username?.message}</div>
            </div>
            <div className="mb-1">
              <input
                {...register("password", {
                  required: 'Campo obrigatório'
                })}
                type="password"
                className={`form-control base-input ${errors.password ? 'is-invalid' : ''}`}
                placeholder="Password"
                name="password"
              />
              <div className="invalid-feedback d-block">{errors.password?.message}</div>
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