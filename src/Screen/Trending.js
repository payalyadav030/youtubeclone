import React , {Component} from 'react';
import { BrowserRouter as Router, Route ,Link, Switch, BrowserRouter} from 'react-router-dom';

import { getTrendingVideosExploreSection} from '../api/route'

class Trending extends Component{
    constructor(props){
        super(props)
        this.state={
            trending:[]
        } 
        this.setState = this.setState.bind(this)
    }
  
   


    componentDidMount=()=>{
       getTrendingVideosExploreSection().then((response)=>{
        //    console.log("response", response.data.items)
           this.setState({
               trending:[...this.state.trending, response.data.items]
           },()=>{
            console.log(this.state.trending)
           })
        // console.log(response);
       }).catch(function(err){
           console.log(err)
       
       })
    }
    
    render(){
       
        return (
            <div>
                <h3>Trending</h3>
                {this.state.trending.map((items, index)=>{
                    return(
                        <div className="trending-item-div">
                            {items.map((item, index)=>{
                                console.log(item)
                               return(
                                   <Link to={`/playingvideo/`+item.id}>
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

}

export default Trending

