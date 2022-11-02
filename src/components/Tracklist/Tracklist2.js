import { Avatar } from '@mui/material'
import React from 'react'
import './Tracklist.css'
import { auth, db, provider } from "../../firebase";
import ExitToAppRoundedIcon from '@mui/icons-material/ExitToAppRounded';
import { signOut } from 'firebase/auth';
import { DeleteForeverRounded } from '@mui/icons-material';
import { useEffect , useState } from 'react';
import { collection, onSnapshot, query } from 'firebase/firestore';
import { orderBy } from 'firebase/firestore';
import Wactlistbtn from '../Button/Wactlistbtn';


const Tracklist2 = () => {
 const signout =()=>{
    signOut(auth,provider);
 }

 const [crypto, setcrypto] = useState([])
   
  useEffect(() => {
    const q= query(collection(db,'id'),orderBy('timestamp','desc'))
    onSnapshot(q,(snap)=>{
      setcrypto(snap.docs.map((doc)=>(
        {...doc.data(), id:doc.id}
      )
      ))
    })
  }, [])
  
     const value = crypto.map((newvalue)=>{
       return newvalue.name;
     })

    



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
     (value,id) =>  <> <span key={id} >  <div><img style={{width:'25px' }} src={value.img} alt="internet problem" /> {value.name} {value.price}$  </div>    <DeleteForeverRounded sx={{cursor:'pointer', ":hover": { fontSize:'2rem' } }} /> </span>

     </>
   )
   }
     </div>
     <div style={{display:'none'}} >
     <Wactlistbtn  value={value}  />
     </div>
     <button onClick={signout} ><ExitToAppRoundedIcon sx={{fontSize:'1.5rem', marginRight:'1rem', color:'var(--white)' }} /> Log Out</button>
    </div>
     
    </>
  )
}

export default Tracklist2;