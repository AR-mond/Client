import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/home/home';
import Login from './components/login/login';
import Findid from './components/findid/findid';
import FindpwReset from './components/findpw_reset/findpw_reset';
import Resetpw from './components/resetpw/resetpw';
import Changepw from './components/changepw/changepw';
import Joinfin from './components/joinfin/joinfin';
import Join from './components/join/join';
import Mypage from './components/mypage/mypage';
import styles from './app.module.css';
import Test1 from './components/test1/test1';
import Estimate from './components/estimate/estimate';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/findid" exact element={<Findid />} />
        <Route path="/findpwreset" exact element={<FindpwReset />} />
        <Route path="/resetpw" exact element={<Resetpw />} />
        <Route path="/changepw" exact element={<Changepw />} />
        <Route path="/join" exact element={<Join />} />
        <Route path="/joinfin" exact element={<Joinfin />} />
        <Route path="/estimate" exact element={<Estimate />} />
        <Route path="/mypage" exact element={<Mypage/>} />
        <Route path="/test1" exact element={<Test1 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
