import React, { useEffect } from 'react'
import Button from './index'
import { useState } from 'react'

const Wactlistbtn = ({id,id2,coin}) => {


   const addlist =  ()=>{
        console.log(  coin.market_cap,'😎😎😎' , coin.current_price.toLocaleString(),  coin.symbol );
   }
     

  return (
    <> <div style={{ display:id2!=undefined ?'none':'inherit'  }}   >
    <Button  onClick={addlist} text={ "Add to WatchList +"  } />
    </div>
    </>
  )
}

export default Wactlistbtn