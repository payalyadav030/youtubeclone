import React from 'react';
import {connect} from 'react-redux';
import { BrowserRouter as Router, Route ,Link, Switch, BrowserRouter} from 'react-router-dom';


import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
// import { Link } from 'react-router-dom';
// import VideoshomePage  from '../Screen/YoutubeVid';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

function SideNav(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  // subscribe=(channelTitle, channelId)=>{
  //   console.log(channelTitle, channelId)
  // }

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <IconButton edge="start"  color="inherit" aria-label="menu" className="hambar">
                        <MenuIcon />
                    </IconButton>
      <div className="youtube">YouTube</div>
      <List >
        {['Home', 'Explore', 'History', 'Watch', 'Liked', 'Subscription'].map((text, index) => (
          <Link classname="category" to={text=="Home"?"/":'/'+text.toLowerCase()}><ListItem className="categories" button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
            
          </ListItem></Link>
        ))}
      </List>
      <Divider />
      <div className="channel-title">
        {/* <span>SUBSCRIPTION</span> */}
         {props.channelTitle.map((item, index)=>{
           console.log(item[0])
           return(
             <Link to={`/subscription/`+props.channelId[index]}>
             <div>
              <p className="company">{item[0]}</p>
             </div>
             </Link>  
           )
         })}
          
        </div>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
     
      
      <CssBaseline />
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      {/* <main className={classes.content}>
        <div className={classes.toolbar} />
        
      </main> */}
    </div>
  );
}

SideNav.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};
const mapStateToProps=(state)=>{
  return{
    channelTitle:state.channelTitle,
    channelId:state.channelId
  }
}
const mapStateToDispatch=(dispatch)=>{
  return{
    dispatch:dispatch
  }
}

export default connect(mapStateToProps, mapStateToDispatch)(SideNav)