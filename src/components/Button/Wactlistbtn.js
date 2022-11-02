import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { db } from '../../firebase'
import Button from './index'   

const Wactlistbtn = ({id,id2,coin}) => {

   const addlist =async () =>{
  const payload = {
    name : coin.name,
    crytpoid: coin.id,
    img : coin.image,
    price: coin.current_price.toLocaleString() ,
    timestamp : serverTimestamp()
  }
 await addDoc(collection(db,'id'),payload);
   }
 
 
  return (
    <> <div style={{ display:id2!=undefined ?'none':'inherit'  }}   >
    <Button   onClick={ addlist} text={ "Add to WatchList +"  } />
    </div>
    </>
  )
}

export default Wactlistbtn