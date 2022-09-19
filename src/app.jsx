import styles from './app.module.css';
import HomeFooter from './components/home_footer/home_footer';
import HomeHeader from './components/home_header/home_header';
import HomeMain from './components/home_main/home_main';
import HomeMain2 from './components/home_main2/home_main2';

const App = () => {
  return (
    <>
      <HomeHeader />
      <HomeMain />
      <HomeMain2 />
      <HomeFooter />
    </>
  );
};

export default App;
