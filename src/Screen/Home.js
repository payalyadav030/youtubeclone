import React, { Component } from 'react'
// import { getHomeSectionDataFromYoutubePlaylistId } from '../api/route';
import '../App.css';
import {connect} from 'react-redux'
import { getHomePageData } from '../redux/action';
import { BrowserRouter as Router, Route ,Link, Switch, BrowserRouter} from 'react-router-dom';
// import {DetailsOfVideo} from './YoutubeVid';
/* 
https://www.googleapis.com/youtube/v3/videos?part=contentDetails&chart=mostPopular&regionCode=IN&maxResults=25&key=AIzaSyAmiqlCL4QUrVCaQ5tIPcgqPaufUtEWmnE


*/
class Home extends Component{

    componentDidMount = () => {
        getHomePageData(this.props.getHomePage)
    }
    render(){
        // console.log(this.props.homePage.data)
        return(
            <div className="home-div">
               <div className="music-div">
               {/* <add key="webpages:Enabled" value="true" /> */}
                   <List
                   addItemsToHistory={this.props.addToHistory}
                    data={this.props.homePage.data}/>
                   
               </div>
            </div>
          
        )
    }
}


const List =(props)=>{
    // console.log(props)
    // console.log(props.addItemsToHistory)
    if(!props.data){
        return false
    }
    const itemVideoId=(id, title,url)=>{
        
    }
    return(
        <div>
            {/* {console.log(props)} */}
            {props.data.map((items, index)=>{
                return(
                    <div className="section-div" key={index}>
                        {items.data.items.map((item, index)=>{
                            // console.log("itemss", item)
                            return(
                            <Link 
                             className="each-item-div" to={`/playingvideo/`+item.snippet.resourceId.videoId}>
                                <div onClick={()=>itemVideoId(item.snippet.resourceId.videoId, item.snippet.title,item.snippet.thumbnails.medium.url)} >
                                <img
                                onClick={()=>props.addItemsToHistory({type:"add_to_history", payload:item})}
                                className="homepage-img" src={item.snippet.thumbnails.medium.url}></img>
                                <p className="video-title">{item.snippet.title}</p>
                                </div>
                            </Link>
                            )
                        })}
                    </div>
                )
            })}
        </div>
    )  
} 
const mapStateToProps=(state)=>{
    // console.log(state)
    return{
        homePage:state.homePage,
        // videoId:state.videoId
        
    }
}
 const mapStateToDispatch=(dispatch)=>{
    //  console.log(dispatch)
    return{
        getHomePage:dispatch,
        addToHistory:dispatch,    
    }
}
// export default {
//     Home: connect(mapStateToProps, mapStateToDispatch)(Home),
//     List: connect(mapStateToProps, mapStateToDispatch)(List)
// }
export default connect(mapStateToProps,mapStateToDispatch)(Home)