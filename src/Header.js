import React from 'react'
import './Header.css'
import SearchIcon from'@material-ui/icons/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from'@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { useDispatch } from 'react-redux';
import { auth } from './firebase';
import {logout} from './features/counter/userSlice.js'
import { useSelector } from 'react-redux';
import { selectUser } from './features/counter/userSlice';


function Header() {
    const dispatch = useDispatch();
    const user = useSelector(selectUser);

    const logOutOfApp = () => {
        dispatch(logout())
        auth.signOut();
    };
    return (
        <div className= "Header">
           <div className="header__left">
               <img src="/images/logo.png"  alt =" "></img>  
           </div>
           
           <div className = "header__right"> 
             <HeaderOption Icon={HomeIcon} title = "Home"/>
             <HeaderOption Icon={SupervisorAccountIcon } title = "My Network"/>
             <HeaderOption Icon={BusinessCenterIcon } title = "Jobs"/>
             <HeaderOption Icon={ChatIcon } title = "Messaging"/>
             <HeaderOption Icon={NotificationsIcon } title ="Notifications"/>
             <HeaderOption
              avatar="https://images.rawpixel.com/image_png_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvdjc5MS10YW5nLTM1LnBuZw.png?s=aLxshBxLcykO2UAnr6F0Nzhqtdx6iR6UuKi4bFSTzC8"
            //   title =":Me"
              onClick = {logOutOfApp}/>
            <div className = "header__search" > 
                        <SearchIcon />
                        <input type = "text"  placeholder="Search" />   
                    </div>

           </div>
            
        </div>
    )
}

export default Header
