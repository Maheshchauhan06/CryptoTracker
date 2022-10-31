import React, { useEffect } from 'react'
import Button from './index'
import { useState } from 'react'

const Wactlistbtn = ({id,id2}) => {
   const [coinid, setcoinid] = useState('')

   const addlist =  ()=>{
       setcoinid([{
         cryptoid:Math.random()*10000,
          crypto:id,
          crypto2:id2,
       },...coinid,
      ])
      console.log(id, id2);
   }
     
   useEffect(() => {
      localStorage.setItem('id',JSON.stringify(coinid))
   }, [])
   

  return (
    <> 
    <Button onClick={addlist} text={ "Add to WatchList +"  } />
    </>
  )
}

export default Wactlistbtn