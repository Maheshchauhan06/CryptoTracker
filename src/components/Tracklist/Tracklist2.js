import { Avatar } from '@mui/material'
import React from 'react'
import './Tracklist.css'
import { auth, provider } from "../../firebase";
import ExitToAppRoundedIcon from '@mui/icons-material/ExitToAppRounded';
import { signOut } from 'firebase/auth';
import { DeleteForeverRounded } from '@mui/icons-material';
import { useEffect , useState } from 'react';


const Tracklist2 = () => {
 const signout =()=>{
    signOut(auth,provider);
 }

 const [crypto, setcrypto] = useState([])

 useEffect( () => {
    const getvalue =  JSON.parse(localStorage.getItem('item'))
    if (getvalue) setcrypto(getvalue)
  }, [])
  console.log(crypto);
 



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
   { crypto?.map(
     value => <span> {value.name} {value.price}  <DeleteForeverRounded sx={{cursor:'pointer', ":hover": { fontSize:'2rem' } }} /> </span>

   )

   }
    

     </div>
     
     <button onClick={signout} ><ExitToAppRoundedIcon sx={{fontSize:'1.5rem', marginRight:'1rem', color:'var(--white)' }} /> Log Out</button>
    </div>
    </>
  )
}

export default Tracklist2;