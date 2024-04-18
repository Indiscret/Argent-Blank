import { Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Home from '../pages/Home/Home';
import SignIn from '../pages/SignIn/SignIn';
import User from '../pages/User/User'
import store from './store';
import Controller from '../controllers/Controller';

function Router() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route element={<Controller />}>
          <Route path="/user" element={<User />} />
        </Route>
      </Routes>
    </Provider>
  );
}

export default Router;
