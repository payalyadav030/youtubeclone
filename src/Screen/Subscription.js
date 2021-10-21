import React , {Component} from 'react';
import {connect} from 'react-redux';
import { BrowserRouter as Router, Route ,Link, Switch, BrowserRouter} from 'react-router-dom';
import {getAllVideosOfSubscribedChannel} from '../api/route'


class Subscription extends Component{
    state={
        subscribedVideos:[]
    }

    componentDidMount=()=>{
        let channelId= this.props.match.params.id
        // console.log(channelId)

        getAllVideosOfSubscribedChannel(channelId).then((response)=>{
            console.log(response)
            this.setState({
                subscribedVideos:[...this.state.subscribedVideos, response.data.items]
                
            },()=>{
                // console.log(this.state.subscribedVideos)
            })

            // this.state.subscribedVideos.push(response.data.items)

            console.log(this.state.subscribedVideos)
        }).catch(function(err){
            console.log(err)
        })
    }
    
    render(){
        {console.log(this.props)}
        return(
            <div>
                <Subscribe subscribe={this.state.subscribedVideos}/>
            </div>
        )
    }
}

const Subscribe=(props)=>{
    // console.log(props)
    return(
        <div className="subs-div-1">
            {props.subscribe.map((items,index)=>{
                // console.log(items)
                return(
                    <div className="subs-div-2">
                        {items.map((item, index)=>{
                            return(
                                <Link  >
                                <div className="subs-div-3">
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
export default Subscription