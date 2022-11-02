import { Avatar } from '@mui/material'
import React from 'react'
import './Tracklist.css'
import { auth, db, provider } from "../../firebase";
import ExitToAppRoundedIcon from '@mui/icons-material/ExitToAppRounded';
import { signOut } from 'firebase/auth';
import { DeleteForeverRounded } from '@mui/icons-material';
import { useEffect , useState } from 'react';
import { collection, deleteDoc, doc, onSnapshot, query } from 'firebase/firestore';
import { orderBy } from 'firebase/firestore';


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

    const [delet, setdelet] = useState([])

    const deleted = async (id) =>{
       await deleteDoc(doc(db,'id',id));
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
   
   { crypto?.map(
     (value,id) =>  <> 
     <span key={id} >  <a href={`/coin?${value.crytpoid}`}>
      <div className='value'><img style={{width:'25px' }} src={value.img} alt="internet problem" /> {value.name} {value.price}$  </div>
      </a>    <DeleteForeverRounded  onClick={()=>deleted(value.id)} sx={{cursor:'pointer', ":hover": { fontSize:'2rem' } }} /> </span>
     </>
   )
   }
     </div>
    
     <button onClick={signout} ><ExitToAppRoundedIcon sx={{fontSize:'1.5rem', marginRight:'1rem', color:'var(--white)' }} /> Log Out</button>
    </div>
     
    </>
  )
}

export default Tracklist2;