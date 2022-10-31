import React from 'react'
import Button from './index'
import CoinPageList from '../CoinPageComponents/CoinPageList'

const Wactlistbtn = () => {

   const addlist =()=>{
       localStorage.setItem('listid', '' )
   }

  return (
    <> 
    <Button onClick={addlist} text={ "Add to WatchList +"  } />
    </>
  )
}

export default Wactlistbtn