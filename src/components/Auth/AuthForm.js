import { type } from '@testing-library/user-event/dist/type';
import { useState, useRef, useContext } from 'react';
import { useHistory } from 'react-router-dom';

import AuthContext from '../Store/auth-context';
import classes from './AuthForm.module.css';

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const history=useHistory()
  const emailuserref=useRef()
  const passworduseref =useRef()
  const authctx=useContext(AuthContext)
  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };
  const submithandler=(event)=>{
    event.preventDefault()
    const enteredemail=emailuserref.current.value
    console.log(enteredemail)
    const enteredpassword=passworduseref.current.value
    console.log(enteredpassword)
    let url
    if(isLogin)
   {
    console.log("db before called")
    url ='https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDym9saGbXxpIXDaOEzLRpwJbkwauUoU5w'
   }
  else{
      url='https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDym9saGbXxpIXDaOEzLRpwJbkwauUoU5w'
    console.log("database called")
  }
      fetch(url,

     { method :'POST',
    body :JSON.stringify({email:enteredemail,password:enteredpassword,returnSecureToken :true}),
    headers :{
      'Content-Type' : 'application/json'
    }
   } ).then(res =>{
    if(res.ok)
    {
      
      return res.json().then(data=>{
        authctx.login(data.idToken)
        history.replace('/')
      })
    }
    else{
      res.json().then(data=>{
        console.log(data)
      })
    }
   })


}
  return (
    <section className={classes.auth}>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form onSubmit={submithandler}>
        <div className={classes.control}>
          <label htmlFor='email'>Your Email</label>
          <input type='email' id='email' required ref={emailuserref}/>
        </div>
        <div className={classes.control}>
          <label htmlFor='password'>Your Password</label>
          <input
            type='password'
            id='password'
            required
            ref={passworduseref}
          />
          <button type ='submit'>login</button>
        </div>
        <div className={classes.actions}>
          <button
            type='button'
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? 'Create new account' : 'Login with existing account'}
          </button>
        </div>
      </form>
    </section>
  );
};
export default AuthForm;
