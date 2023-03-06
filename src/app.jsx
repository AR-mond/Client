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
import styles from './app.module.css';
import Test1 from './components/test1/test1';
import Estimate from './components/estimate/estimate';
import Ar from './pages/ar';
import NotFound from './pages/notfound';

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
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
