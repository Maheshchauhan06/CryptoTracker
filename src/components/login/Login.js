import React from 'react'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import './login.css'
import {ReactComponent as Google} from '../../assets/Google.svg'
import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../../firebase';

const Login = () => {
    const [open, setOpen] = React.useState(false);

    const sigin = () => {
      signInWithPopup(auth, provider);
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
    <Button variant="outlined" onClick={handleClickOpen}>
        Login
      </Button>
      <Dialog open={open} onClose={handleClose}>
      <div className="container">
      <h1> Sign Up  </h1>
      <input type="text" placeholder='First Name' />
      <input type="text" placeholder='Last Name' />
      <input type="email" placeholder='E-mail' />
      <input type="password" placeholder='Password' />
      <input type="password" placeholder='Confirm Password' />
       <button className='signup' >Sign up</button>
       <div className="break">
     <p></p> Or Login with <p></p></div>
     <div className="icon">
        <Google  onClick = {sigin} />
       </div>
     </div>
      </Dialog>
    </>
  )
}

export default Login