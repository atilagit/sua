import Navbar from 'components/Navbar';
import Footer from 'components/Footer';
import Menucard from 'components/Menucard';

import './styles.css';

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="home-container">
      <Menucard />
      <Menucard />
      </div>
      <Footer />
    </>
  );
};

export default Home;
