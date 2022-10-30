import Drawer from "./Drawer";
import React, { useEffect } from "react";
import Button from "../Button";
import "./styles.css";
import Toggle from './Toggle'
import { useState } from "react";
import { onAuthStateChanged, signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../firebase";
import Tracklist from '../Tracklist/Tracklist'

function Header() {

  const [user, setuser] = useState([]);
   
  useEffect(() => {
   onAuthStateChanged(auth , (cuser)=>{
     setuser(cuser);
   })
  }, []);

  const signin =()=>{
     signInWithPopup(auth,provider)
  }


  const [theme, settheme] = useState(localStorage.getItem('theme'))
   

   {/* change theme */}
  const changetheme = () =>{
       if(theme==="light-theme"){
    localStorage.setItem('theme','dark-theme')
    settheme(localStorage.getItem('theme'))
       }else{
    localStorage.setItem('theme','light-theme')
    settheme(localStorage.getItem('theme'))
       }
      }
   
    useEffect(() => {
     document.body.className=theme;
     console.log(theme)
    }, [theme])
    
     


  return (
    <div className="navbar">
      <a href="/">
        <h1 className="heading"> 
          CryptoTracker <span style={{ color: "var(--blue)" }}>.</span>
        </h1>
        </a> 
      <div className="navbar-leftside">
      <div onClick={changetheme} className="toggle">
      <Toggle onClick={changetheme} />
      </div>
        { user ?  <Tracklist/> :  <button className="login-btn"  onClick={signin} >Login</button> }
      <div className="links-flex">
       
        <a href="/">
          <p className="links">Home</p>
        </a>
        <a href="/compare">
          <p className="links">Compare</p>
        </a>
        {/* <a href="/about-us">
          <p className="links">About Us</p>
        </a> */}
        <a href="/dashboard">
          <p className="links">
            <Button text="Dashboard" />
          </p>
        </a>
      </div>
      <div className="menu-div">
        <Drawer/>
      </div>
      </div>
    </div>
  );
}

export default Header;
