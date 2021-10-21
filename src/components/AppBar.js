import React, { Component } from 'react'
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { AppBar } from '@material-ui/core';
import Search from './search';
class TopBar extends Component {
    render() {
        return (
                 <AppBar style={{ background: 'rgb(232 10 39)' }} className="appbar" >
                    {/* <IconButton edge="start"  color="inherit" aria-label="menu" className="hambar">
                        <MenuIcon />
                    </IconButton> */}
                        {/* <div className="youtube">
                        <p>YouTube</p>
                        </div> */}
                        <Search/>
                        <div className="login">
                        <button>Login</button>
                        </div>
                </AppBar>
        )
    }
}
export default TopBar
