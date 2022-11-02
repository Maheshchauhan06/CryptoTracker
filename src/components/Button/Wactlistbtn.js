import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { db } from '../../firebase'
import Button from './index'   

const Wactlistbtn = ({value, id,id2,coin}) => {
 

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
  const check = ()=>{
     if(value.includes(coin.name)){
       console.log(false);
       return false
     }else{
      console.log(true);
      return true
     }
  }

   
  return (
    <> <div style={{ display:id2!=undefined ?'none':'inherit'  }}   >
    <Button   onClick={ addlist} text={check==true? "Add to WatchList +" : 'Already Added' } />
    </div>
    </>
  )
}

export default Wactlistbtn