import { Avatar } from '@mui/material'
import React from 'react'
import './Tracklist.css'
import { auth, provider } from "../../firebase";
import ExitToAppRoundedIcon from '@mui/icons-material/ExitToAppRounded';
import { signOut } from 'firebase/auth';
import { DeleteForeverRounded } from '@mui/icons-material';


const Tracklist2 = () => {

 const signout =()=>{
    signOut(auth,provider);
 }


  return (
    <><div className="container">
    <Avatar sx={{
        width:'6rem',
        height:'6rem',
        border:'2px solid var(--green)'
    }} src={auth.currentUser?.photoURL} />
    <h3 > {auth.currentUser?.displayName} </h3>
    <h3 > Track list </h3>
     <div className='track-list' >
      <span>bitcoin 293830$ <DeleteForeverRounded sx={{cursor:'pointer', ":hover": { fontSize:'2rem' } }} /> </span>
     </div>
     <button onClick={signout} ><ExitToAppRoundedIcon sx={{fontSize:'1.5rem', marginRight:'1rem', color:'var(--white)' }} /> Log Out</button>
    </div>
    </>
  )
}

export default Tracklist2;