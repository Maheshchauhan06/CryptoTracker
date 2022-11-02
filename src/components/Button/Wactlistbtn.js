import React, { useEffect, useState } from 'react'
import { addlist } from '../../functions/addlist'
import Button from './index'

const Wactlistbtn = ({id,id2,coin}) => {
   const [value, setvalue] = useState('')
   

  return (
    <> <div style={{ display:id2!=undefined ?'none':'inherit'  }}   >
    <Button  onClick={()=> addlist(id, coin,value,setvalue)} text={ "Add to WatchList +"  } />
    </div>
    </>
  )
}

export default Wactlistbtn