import React from 'react';
import "./Sidebar.css";
import { Avatar } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { selectUser } from './features/counter/userSlice';

function Sidebar() {
    const user = useSelector(selectUser);

    const recentItem = (topic) => (
        <div className = "sidebar__recentItem ">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>
    )

    return (
        <div className ="sidebar">
            <div className = "card1">
                <div className = "sidebar__top">
                <img src ="https://images.unsplash.com/photo-1557683316-973673baf926?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1015&q=80" alt=" "/>
                <Avatar src={user.photoUrl} className="sidebar__avatar" > {user.displayName[0]} </Avatar>
                <h2>{user.displayName}</h2>
                <h4> {user.email}</h4>
                </div>

                <div className="sidebar_stats">
                    <div className="sidebar_stat">
                        <p>Who viewed you</p>
                        <p className="stat_number">20,234</p>
                    </div>
                    <div className="sidebar_stat">
                        <p>Views on post</p>
                        <p className="stat_number">21,232</p>
                    </div>
                </div>
            </div>
              <div className="sidebar__bottom">
                    <p>Recent</p>
                    {recentItem('React.js')} 
                    {recentItem('Vue.js')} 
                    {recentItem('Next.js')} 
                    {recentItem('Angular.js')} 
                    {recentItem('HTML & CSS')} 
                </div>
                
        </div>
        
    )
}

export default Sidebar
