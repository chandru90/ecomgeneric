import { Fragment } from 'react';

import HeaderCartButton from './Headercartbutton';
//import mealsImage from '../../assets/meals.jpg';
import classes from './Header.module.css';
import Products from '../Prod/Products';
import MainNavigation from '../Layout/MainNavigation';
import UserProfile from '../Profile/UserProfile';

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
      
        <MainNavigation />
        <HeaderCartButton onclick ={props.setcart} />
      </header>
     
      
    </Fragment>
  );
};

export default Header;