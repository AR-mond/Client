import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/home/home';
import Login from './components/login/login';
import styles from './app.module.css';
import Test1 from './components/test1/test1';
import Estimate from './components/estimate/estimate';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/estimate" exact element={<Estimate />} />
        <Route path="/test1" exact element={<Test1 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
