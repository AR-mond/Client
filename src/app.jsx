import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/home/home';
import Login from './components/login/login';
import Mypage from './components/mypage/mypage';
import styles from './app.module.css';
import Test1 from './components/test1/test1';
import Estimate from './components/estimate/estimate';
import Ar from './components/ar/ar';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/estimate" exact element={<Estimate />} />
        <Route path="/mypage" exact element={<Mypage />} />
        <Route path="/test1" exact element={<Test1 />} />
        <Route path="/ar" exact element={<Ar />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
