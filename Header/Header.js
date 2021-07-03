import React, { useState } from 'react'
import PinterestIcon from '@material-ui/icons/Pinterest';
import { IconButton } from '@material-ui/core';
import styled from 'styled-components'
import SearchIcon from '@material-ui/icons/Search';
import './Header.css'
import NotificationsIcon from '@material-ui/icons/Notifications';
import SmsIcon from '@material-ui/icons/Sms';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Avatar } from '@material-ui/core';


function  Header(props) {
    const [input,setInput]=useState("");

    const onSubmit=(e)=>{
        e.preventDefault();
        props.onSearch(input);
        
    }
    return (
        <div className="wrapper">
            <div>
                <IconButton>
                    <PinterestIcon className="logowrapper"/>
                </IconButton>
            </div>
            <div className="home">
                <a href="/">Home</a>
            </div>
            <div className="today">
                <a href="/">Today</a>
            </div>
            <div className="search">
                <div className="search__bar">
                    <SearchIcon/>
                    <form>
                        <input type="text" onChange={(e)=>setInput(e.target.value)}/>
                        <button type="submit" onClick={onSubmit}></button>
                    </form>
                </div>
            </div>
            <div className="wrapper__icon">
                <IconButton>
                    <NotificationsIcon />
                </IconButton>
                <IconButton>
                    <SmsIcon/>
                </IconButton>
                    <Avatar src="https://yt3.ggpht.com/yti/APfAmoELFKjML-x5lYwY8HnsaY5KMyDYiJR0MH0V6A=s88-c-k-c0x00ffffff-no-rj-mo" className="wrapper__icon__svg"/>
                <IconButton>
                    <ExpandMoreIcon />
                </IconButton>
            </div>
        </div>

    )
}

export default Header
