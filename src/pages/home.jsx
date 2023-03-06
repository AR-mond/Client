import HomeFooter from '../components/home_footer/home_footer';
import Header from '../components/header/header';
import HomeMain from '../components/home_main/home_main';
import HomeSolutions from '../components/home_solutions/home_solutions';
import HomeIntruction from '../components/home_intruction/home_intruction';
import HomeEstimate from '../components/home_estimate/home_estimate';

const Home = () => {
  return (
    <>
      <Header />
      <HomeMain />
      <HomeSolutions />
      <HomeIntruction />
      <HomeEstimate />
      <HomeFooter />
    </>
  );
};

export default Home;
