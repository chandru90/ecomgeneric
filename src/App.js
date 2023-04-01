import { Switch, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import UserProfile from './components/Profile/UserProfile';
import AuthPage from './pages/AuthPage';
import HomePage from './pages/HomePage';
import Products from './components/Prod/Products';
import Cart from './components/Cart/Cart';
import HeaderCartButton from './components/Cart/Headercartbutton';

function App() {
  return (
    <Layout>
    <Switch>
        <Route path='/' exact>
          <HomePage />
        </Route>
        <Route path='/auth'>
          <AuthPage />
        </Route>
        <Route path='/profile'>
          <UserProfile />
        </Route>
        <Route path='/Prod'>
          <Products/>
        </Route>
        <Route path='/Cart'>
          <Cart/>
        </Route>
        </Switch>
    </Layout>
  );
}

export default App;
