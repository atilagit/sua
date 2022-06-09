import Button from 'components/Button';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import './styles.css';

type FormData = {
  username: string;
  password: string;
}

const Logincard = () => {

  const { register, handleSubmit } = useForm<FormData>();

  const onSubmit = (formData : FormData) => {
    console.log(formData);
  };

  return (
    <>
      <div className="base-card auth-card">
        <div className="auth-content-container">
          <h2>LOGIN</h2>
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
    </>
  );
}

export default Logincard;
