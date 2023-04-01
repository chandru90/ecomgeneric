import { Link } from 'react-router-dom';
import { useContext } from 'react';
import AuthContext from '../Store/auth-context';
import classes from './MainNavigation.module.css';


const MainNavigation = () => {
  const authctx =useContext(AuthContext)
  const isLoggedIn =authctx.isLoggedIn
  const logouthandler=()=>{
    authctx.logout()
  }
  return (
    <header className={classes.header}>
      <Link to='/'>
        <div className={classes.logo}>React Auth</div>
      </Link>
      <nav>
        <ul>
          {!isLoggedIn && <li>
            <Link to='/auth'>Login</Link>
          </li>}
          {isLoggedIn &&
          <li>
            <Link to='/profile'>Profile</Link>
          </li>}
          
          {isLoggedIn &&
          <li>
            <Link to='/Cart'>Cart</Link>
           </li>}
          
          {isLoggedIn &&  <li>
            <button onClick={logouthandler}><Link to='auth'>Logout</Link>
            </button>
          </li>}
          
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;