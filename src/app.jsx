import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Login from './pages/login';
import Findid from './pages/findid';
import FindpwReset from './components/findpw_reset/findpw_reset';
import Resetpw from './components/resetpw/resetpw';
import Changepw from './components/changepw/changepw';
import Joinfin from './components/joinfin/joinfin';
import Join from './pages/join';
import Mypage from './components/mypage/mypage';
import './app.css';
import Test1 from './components/test1/test1';
import Estimate from './components/estimate/estimate';
import Ar from './pages/ar';
import NotFound from './pages/notfound';
import Intro from './components/intro/intro';
import Guide from './components/guide/guide';
import Support from './components/support/support';
import Portfolio from './components/portfolio/portfolio';
import PlantViewer from './pages/plant';
import Pay from './components/pay/pay';
import PaySuccess from './components/pay_success/pay_success';
import ScrollToTop from './components/scrollToTop';

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
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
        <Route path="/mypage" exact element={<Mypage />} />
        <Route path="/test1" exact element={<Test1 />} />
        <Route path="/ar" exact element={<Ar />} />
        <Route path="/intro" exact element={<Intro />} />
        <Route path="/guide" exact element={<Guide />} />
        <Route path="/support" exact element={<Support />} />
        <Route path="/portfolio" exact element={<Portfolio />} />
        <Route path="/plant" exact element={<PlantViewer />} />
        <Route path="/pay" exact element={<Pay />} />
        <Route path="/pay/success" exact element={<PaySuccess />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
