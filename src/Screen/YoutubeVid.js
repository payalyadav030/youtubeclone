import React , {Component} from 'react';

import { Link } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';
import { getHomePageData } from '../redux/action';
// import { BrowserRouter as Router, Route ,Link, Switch, BrowserRouter} from 'react-router-dom'

import { getAllCommentsOfVideo, getDetailsOfTheClickedVideos, getRelatedVideosOfPlayedVideos } from '../api/route';
import { connect } from 'react-redux';

class VideoshomePage extends Component{
    constructor(props){
        // console.log("constructor prop",props)
        super(props)

        this.state={
            relatedVideos:[],
            url:"",
            title:"",
            publishedAt:"",
            commentCount:"",
            dislikeCount:"",
            likeCount:"",
            viewCount:"",
            channelId:"",
            channelTitle:"",
            comments:[],
            channelId:""
        }
        this.setState = this.setState.bind(this)
    }
   
    
    componentDidMount=()=>{
       
        let id=this.props.match.params.id
            // related videos:
            getRelatedVideosOfPlayedVideos(id).then((response)=>{
                // console.log("response",response)
                this.setState({
                    relatedVideos:[...this.state.relatedVideos, response.data.items]
                },()=>{
                    // console.log(this.state.relatedVideos)
                })
                }).catch(function(err){
                    console.log(err)
                }) 
               
                
            // details of Videos
            getDetailsOfTheClickedVideos(id).then((response)=>{
                // console.log(id)
                console.log(response)
                
                this.setState({
                    url:response.data.items[0].snippet.thumbnails.medium.url,
                    title: response.data.items[0].snippet.title,
                    publishedAt:response.data.items[0].snippet.publishedAt,
                    likeCount:response.data.items[0].statistics.likeCount,
                    dislikeCount:response.data.items[0].statistics.dislikeCount,
                    viewCount:response.data.items[0].statistics.viewCount,
                    commentCount:response.data.items[0].statistics.commentCount,

                    channelId:response.data.items[0].snippet.channelId,
                    channelTitle:response.data.items[0].snippet.channelTitle
                }, ()=>{
                    // console.log("details state", this.state)
                })
            }).catch(function(err){
                console.log(err)
     })

            // Fetching all comments on a video:
            getAllCommentsOfVideo(id).then((response)=>{
                // console.log(response.data.items[0].snippet.topLevelComment.snippet.textOriginal)
                // console.log(response.data.items)
                this.setState({
                    comments:response.data.items
                })
            }).catch(function(err){
                console.log(err)
            })
          
 }
    

    render(){
        // console.log("props",this.props)
        return(
            <div className='related-videos-div'>
                <div className="details-iframe-div" >
                
                    <div>
                     <Iframe id ={this.props.match.params.id} />
                    </div>
                    
                    <div>
                        <DetailsOfVideo
                        
                        addItemsToLiked={this.props.addToLiked}
                        addItemsToWatch={this.props.addToWatch}
                        addItemsToSubscribe={this.props.addToSubscribe}
                        
                        channelId={this.state.channelId}
                        channelTitle={this.state.channelTitle}
                        id={this.props.match.params.id}
                        url={this.state.url}
                        title={this.state.title} 
                        publishedAt={this.state.publishedAt}
                        likeCount={this.state.likeCount}
                        dislikeCount={this.state.dislikeCount}
                        viewCount={this.state.viewCount}
                        commentCount={this.state.commentCount}
                        comments={this.state.comments}
                        />
                    </div>
                   
                </div>
            
                <div  className="related-videos-section">
                         <Relatedvideos relatedVideos={this.state.relatedVideos}/>
                </div>
               
            </div>
        )
    }
}

const Iframe =(props)=>{
    // console.log(props)
    return(
            <div className="iframe-div">
                <iframe className="video-item" 
                height={400}
                width={800}
                src={`https://www.youtube.com/embed/${props.id}`}>
            </iframe>
            </div>
            
    )
}

const Relatedvideos=(props)=>{ 
    return(
        <div>
           {props.relatedVideos.map((items, index)=>{
                return(
                    <div className="related-videos">
                       {items.map((item, index)=>{
                        // console.log(item)
                        if(!item.snippet){return false}
                          return(
                             <Link to={`/playingvideo/`+item.id.videoId} >
                                <div>
                                    <img src={item.snippet.thumbnails.medium.url} ></img> 
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
const DetailsOfVideo=(props)=>{
    console.log(props.channelTitle.length)
    // console.log(props)
    const data={
        channelTitle:props.channelTitle,
        channelId:props.channelId
    }
    
    return(
        <div className="details-video">
                <div className="video-title-date">
                    <span>{props.title}</span>
                    <p>{props.publishedAt} || </p>
                    <i class="fas fa-eye">{props.viewCount}</i>
                </div>

                <div className="like-elements">
                    <i onClick={()=>props.addItemsToLiked({type:"add_liked_Videos", payload:props})}
                    //  style={{color: "blue"}}
                    class="far fa-thumbs-up">{props.likeCount}</i>
                    <i class="far fa-thumbs-down">{props.dislikeCount}</i>
                    <i onClick={()=>props.addItemsToWatch({type:"add_watch_videos", payload:props})}
                    class="far fa-share-square">Save</i>
                </div>

                <div className="subscribe-btn">
                    <button onClick={()=>props.addItemsToSubscribe({type:"add_subscribe_videos", payload:data})}
                    >{props.edit?"Subscribe":"Subscribed"}</button>
                </div>

                <div>
                    <p>{props.commentCount} Comments</p>
                    <div className="comments-div">
                    <ul className="comments-ul" >
                        {props.comments.map((items, index)=>{
                            // console.log(items)
                            return(
                                <li className="comment-li">
                                    <p className="author-name">{items.snippet.topLevelComment.snippet.authorDisplayName}</p>
                                    <span>{items.snippet.topLevelComment.snippet.textOriginal}</span>
                                </li>  
                            )
                        })}
                     </ul>
                    </div>
                </div> 

        </div>
    )
}
const mapStateToProps=(state)=>{
    return{

    }
}
const mapStateToDispatch=(dispatch)=>{
    return{
        addToLiked:dispatch,
        addToWatch:dispatch,
        addToSubscribe:dispatch
       
    }
}

export default connect(mapStateToProps, mapStateToDispatch)(VideoshomePage)



























;




//https://www.googleapis.com/youtube/v3/commentThreads?key=******************&textFormat=plainText&part=snippet&videoId=kffacxfA7G4&maxResults=50
//https://content-youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=Ks-_Mh1QhMc&key=AIzaSyAa8yy0GdcGPHdtD083HiGGx_S0vMPScDM




/// related videos:
/*

https://content-youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&type=video&id=Ks-_Mh1QhMc&key=AIzaSyAmiqlCL4QUrVCaQ5tIPcgqPaufUtEWmnE

*/