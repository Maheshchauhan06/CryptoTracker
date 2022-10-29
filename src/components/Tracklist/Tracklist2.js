import { Avatar } from '@mui/material'
import React from 'react'
import './Tracklist.css'
import { auth } from "../../firebase";


const Tracklist2 = () => {
  return (
    <><div className="container">
    <Avatar sx={{
        width:'6rem',
        height:'6rem',
        border:'2px solid var(--green)'
    }} src={auth.currentUser?.photoURL} />
    <h3 > {auth.currentUser?.displayName} </h3>
     <div className="tracklist">
      <h4> bitcoin 2220202 </h4>
      <h4> bitcoin 2220202 </h4>
      <h4> bitcoin 2220202 </h4>
      <h4> bitcoin 2220202 </h4>
      <h4> bitcoin 2220202 </h4>
      <h4> bitcoin 2220202 </h4>
     </div>
    </div>
    </>
  )
}

export default Tracklist2