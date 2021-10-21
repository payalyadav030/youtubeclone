/*
Make YouTube clone using YouTube api.
Home Page: consist of trending items
Ui Should be similar to YouTube.
Left Tab : Home: Trending items, Recently watched, cartoon,
         : Liked Videos
         : watch later
         : subscription
Search feature similar to youtube.

on clicking on any video I should be able to watch that video (Watch page)
watch page should have similar suggesting video on right similar to video.
watch page should have comment on that video.
like unlike button and count and subscribe button.


for youtube api-apis with another account:

YT_API_KEY = AIzaSyAoOwsM5RPugs3TivtJDve41LFoey6bXCw,
AIzaSyCJo8njy3mHIHBO6kWiBzHESqniQLDRzyc
 */

// import logo from './logo.svg';
import './App.css';
// import axios from 'axios'
import React , { Component } from 'react'
import { BrowserRouter as Router, Route ,Link, Switch, BrowserRouter} from 'react-router-dom'
import Home from './Screen/Home.js'

import SideNav from './components/SideNav';
import AppBar from './components/AppBar';
import Explore from './Screen/Explore';
import VideoshomePage from './Screen/YoutubeVid';
import Trending from './Screen/Trending';
import Muisc from './Screen/Music';
import Sports from './Screen/Sports';
import Learning from './Screen/Learning';
import History from './Screen/History';
import Liked from './Screen/LikedVideos';
import Watch from './Screen/Watch';
import Subscription from './Screen/Subscription';
import 'font-awesome/css/font-awesome.min.css';
import Search from './Screen/Search';
// const API_KEY="AIzaSyCJo8njy3mHIHBO6kWiBzHESqniQLDRzyc"

class App extends Component{
 
 
  render(){
    return(
      <BrowserRouter>
      <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/home" component={Home}/>
          <Route exact path="/explore" component={Explore}/>     
          <Route exact path="/playingvideo/:id" component={VideoshomePage}/> 
          <Route exact path ="/explore/trending" component={Trending}  />
          <Route exact path="/explore/music" component={Muisc}/>
          <Route exact path="/explore/sports" component={Sports}/>
          <Route exact path="/explore/learning" component={Learning} />
          <Route exact path="/history" component={History}/>
          <Route exact path="/liked" component={Liked} />
          <Route exact path="/watch" component={Watch} />
          <Route exact path="/subscription/:id" component={Subscription}/>
          <Route exact path="/search/:search" component={Search}/>
         
                                                                
        </Switch>
        <AppBar/>
        <SideNav/>
        
      </BrowserRouter> 
    )
  }
}

export default App
