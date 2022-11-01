import React, { useEffect } from 'react'
import Button from './index'

const Wactlistbtn = ({id2,coin}) => {

   const value =
     [  {id: Math.random()*10000,
       name: coin.name,
       img : coin.image,
       price : coin.current_price}]
   

    const addlist=()=>{
      localStorage.setItem('item', JSON.stringify(value))
    }
     

  return (
    <> <div style={{ display:id2!=undefined ?'none':'inherit'  }}   >
    <Button  onClick={addlist} text={ "Add to WatchList +"  } />
    </div>
    </>
  )
}

export default Wactlistbtn