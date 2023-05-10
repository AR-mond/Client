import { createBrowserRouter, RouterProvider } from 'react-router-dom';
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

const router = createBrowserRouter([
  { path: '/', element: <Home />, errorElement: <NotFound /> },
  { path: '/login', element: <Login /> },
  { path: '/findid', element: <Findid /> },
  { path: '/findpwreset', element: <FindpwReset /> },
  { path: '/resetpw', element: <Resetpw /> },
  { path: '/changepw', element: <Changepw /> },
  { path: '/join', element: <Join /> },
  { path: '/joinfin', element: <Joinfin /> },
  { path: '/estimate', element: <Estimate /> },
  { path: '/mypage', element: <Mypage /> },
  { path: '/test1', element: <Test1 /> },
  { path: '/ar', element: <Ar /> },
  { path: '/intro', element: <Intro /> },
  { path: '/guide', element: <Guide /> },
  { path: '/support', element: <Support /> },
  { path: '/portfolio', element: <Portfolio /> },
  {path: '/plant',element: <PlantViewer />}
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
