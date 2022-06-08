import Footer from "components/Footer";
import Logincard from "components/Logincard";

import './styles.css';

const Auth = () => {
    return (
        <>
          <div className="auth-container">
            <Logincard
              text="LOGIN" 
              btn4="ENTRAR" btn4rota="/"
            />
          </div>
          <Footer />
        </>
      );
}

export default Auth;