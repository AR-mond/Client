import styles from './home.module.css';
import HomeFooter from '../home_footer/home_footer';
import HomeHeader from '../header/header';
import HomeMain from '../home_main/home_main';
import HomeSolutions from '../home_solutions/home_solutions';
import HomeIntruction from '../home_intruction/home_intruction';
import HomeEstimate from '../home_estimate/home_estimate';

const Home = () => {
  return (
    <>
      <HomeHeader />
      <HomeMain />
      <HomeSolutions />
      <HomeIntruction />
      <HomeEstimate />
      <HomeFooter />
    </>
  );
};

export default Home;
