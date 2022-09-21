import styles from './home.module.css';
import HomeFooter from '../home_footer/home_footer';
import HomeHeader from '../home_header/home_header';
import HomeMain from '../home_main/home_main';
import HomeMain2 from '../home_main2/home_main2';

const Home = () => {
  return (
    <>
      <HomeHeader />
      <HomeMain />
      <HomeMain2 />
      <HomeFooter />
    </>
  );
};

export default Home;
