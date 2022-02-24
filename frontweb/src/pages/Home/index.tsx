import Footer from 'components/Footer';
import Menucard from 'components/Menucard';

import './styles.css';

const Home = () => {
  return (
    <>
      <div className="home-container">
        <Menucard />
        <Menucard />
      </div>
      <Footer />
    </>
  );
};

export default Home;
