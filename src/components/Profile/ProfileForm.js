import classes from './ProfileForm.module.css';
import { useContext } from 'react';
import { useRef } from 'react';
import AuthContext from '../Store/auth-context';
import { useHistory } from 'react-router-dom';
const ProfileForm = () => {
  const newpasswordref=useRef();
  const authctx =useContext(AuthContext)
  const history =useHistory()
  const submithandler=(event)=>{
    event.preventDefault()
    const updatedpassword =newpasswordref.current.value
    
    
    
    fetch('https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyDym9saGbXxpIXDaOEzLRpwJbkwauUoU5w',
    
    {
      method:'POST',
      body:JSON.stringify({idToken :authctx.token,password:updatedpassword,returnSecureToken:false}),
      headers:{
        'Content-Type' :'application/json'
      }
    }).then(res=>{

    })
    history.replace('/')
  }
  return (
    <form className={classes.form} onSubmit={submithandler}>
      <div className={classes.control}>
        <label htmlFor='new-password'>New Password</label>
        <input type='password' id='new-password' ref={newpasswordref} />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
}

export default ProfileForm;
